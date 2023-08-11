import _thread as thread
import base64
import datetime
import hashlib
import hmac
import json
from urllib.parse import urlparse
import ssl
from datetime import datetime
from time import mktime
from urllib.parse import urlencode
from wsgiref.handlers import format_date_time
import websocket

result_list = []


class Ws_Param(object):
    # 初始化
    def __init__(self, gpt_url):
        self.APPID = "81ebb5b2"
        self.APIKey = "ba6a847f6242e66066bbcdc1669a3b47"
        self.APISecret = "YzQxYjVkN2Y3ZWFmODRmMTM1MjYwODhj"
        self.host = urlparse(gpt_url).netloc
        self.path = urlparse(gpt_url).path
        self.gpt_url = gpt_url

    # 生成url
    def create_url(self):
        # 生成RFC1123格式的时间戳
        now = datetime.now()
        date = format_date_time(mktime(now.timetuple()))

        # 拼接字符串
        signature_origin = "host: " + self.host + "\n"
        signature_origin += "date: " + date + "\n"
        signature_origin += "GET " + self.path + " HTTP/1.1"

        # 进行hmac-sha256进行加密
        signature_sha = hmac.new(self.APISecret.encode('utf-8'), signature_origin.encode('utf-8'),
                                 digestmod=hashlib.sha256).digest()

        signature_sha_base64 = base64.b64encode(signature_sha).decode(encoding='utf-8')

        authorization_origin = f'api_key="{self.APIKey}", algorithm="hmac-sha256", headers="host date request-line", signature="{signature_sha_base64}"'

        authorization = base64.b64encode(authorization_origin.encode('utf-8')).decode(encoding='utf-8')

        # 将请求的鉴权参数组合为字典
        v = {
            "authorization": authorization,
            "date": date,
            "host": self.host
        }
        # 拼接鉴权参数，生成url
        url = self.gpt_url + '?' + urlencode(v)
        # 此处打印出建立连接时候的url,参考本demo的时候可取消上方打印的注释，比对相同参数时生成的url与自己代码生成的url是否一致
        return url


# 收到websocket错误的处理
def on_error(ws, error):
    print("### error:", error)


# 收到websocket关闭的处理
def on_close(ws, code, reason):
    print("### closed ###")


# 收到websocket连接建立的处理
def on_open(ws):
    thread.start_new_thread(run, (ws,))


def run(ws, *args):
    data = json.dumps(gen_params(appid=ws.appid, question=ws.question, history=ws.history, similar_doc=ws.similar_doc))
    ws.send(data)


# 收到websocket消息的处理
def on_message(ws, message):
    data = json.loads(message)
    code = data['header']['code']
    if code != 0:
        print(f'请求错误: {code}, {data}')
        ws.close()
    else:
        choices = data["payload"]["choices"]
        status = choices["status"]
        content = choices["text"][0]["content"]
        result_list.append(content)
        if status == 2:
            ws.close()
            setattr(ws, "content", "".join(result_list))
            result_list.clear()


def gen_params(appid, question, history=None, similar_doc=None):
    """
    通过appid和用户的提问来生成请参数
    """
    text = []
    if history is None:
        history = []

    if not history:
        text.append({"role": "user", "content": question})
    else:
        for i, (old_query, response) in enumerate(history):
            text.append({"role": "user", "content": old_query})
            text.append({"role": "assistant", "content": response})
            text.append({"role": "user", "content": question})

    if similar_doc:
        pass

    data = {
        "header": {
            "app_id": appid,
            "uid": "1234"
        },
        "parameter": {
            "chat": {
                "domain": "general",
                "random_threshold": 0.5,
                "max_tokens": 2048,
                "auditing": "default"
            }
        },
        "payload": {
            "message": {
                "text": text
            }
        }
    }
    return data


def SparkLLM(question, history=None, similar_doc=None, gpt_url="ws://spark-api.xf-yun.com/v1.1/chat"):
    wsParam = Ws_Param(gpt_url)
    websocket.enableTrace(False)
    wsUrl = wsParam.create_url()
    ws = websocket.WebSocketApp(wsUrl, on_message=on_message, on_error=on_error, on_close=on_close, on_open=on_open)
    ws.question = question
    ws.appid = wsParam.APPID
    ws.history = history
    ws.similar_doc = similar_doc
    ws.run_forever(sslopt={"cert_reqs": ssl.CERT_NONE})
    ws.content = ws.content if hasattr(ws, "content") else ""
    history.append((question, ws.content))
    return ws.content, history


if __name__ == "__main__":
    history = []
    result_list = []
    print("user：")
    line = input()
    while line:
        content, history = SparkLLM(question=line, history=history)
        print("Assistant：\n", content)
        print("\n------------------------------------------------\nuser：")
        line = input()


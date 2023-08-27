# from apps.LinChance_GPT_a.MyFaiss import *
# from apps.LinChance_GPT_a.spark import *


# if __name__ == '__main__':
#     linfaiss = LinFaiss()
#     query = "How to use milvus?"
#     # 获取相似内容
#     similar_doc = linfaiss.get_similarity_documents(query)
#     # 开始对话
#     history = []
#     print("user：")
#     line = input()
#     while line:
#         content, history = SparkLLM(question=line, history=history, similar_doc=similar_doc)
#         print("assistant：\n", content)
#         print("\n------------------------------------------------\nuser：")
#         line = input()
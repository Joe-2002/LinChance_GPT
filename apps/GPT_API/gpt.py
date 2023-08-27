
import openai
import os
from apps.GPT_API.configs import openai_api_key


openai.api_key = openai_api_key

        
def get_completion(prompt, model="gpt-3.5-turbo"):
        """
        使用 OpenAI 的模型生成聊天回复。

        参数:
        prompt: 用户的输入，即聊天的提示。
        model: 使用的模型，默认为"gpt-3.5-turbo"。
        """
        messages = [{"role": "user", "content": prompt}]
        response = openai.ChatCompletion.create(
            model=model,
            messages=messages,
            temperature=0,
        )
        return response.choices[0].message["content"] # 模型生成的回复


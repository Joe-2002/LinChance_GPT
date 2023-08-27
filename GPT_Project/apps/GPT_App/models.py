
from django.db.models import *



class ChatHistory(Model):
    timestamp = DateTimeField(auto_now_add=True) # 时间戳
    chat_name = CharField(null=True,max_length=409600,default='New Chat') # 聊天ID
    
class ChatMessage(Model):
    chat_history = ForeignKey(ChatHistory, related_name='messages', on_delete=CASCADE) # 聊天历史
    user_input = CharField(null=False,max_length=409600) # 用户提问
    gpt_response = CharField(null=False,max_length=409600) # AI回答
    timestamp = DateTimeField(auto_now_add=True) # 时间戳

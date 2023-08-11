from django.db.models import *

# Create your models here.

class ChatHistory(Model):
    timestamp = DateTimeField(auto_now_add=True)

class ChatMessage(Model):
    chat_history = ForeignKey(ChatHistory, related_name='messages', on_delete=CASCADE)
    user_input = CharField(null=False,max_length=409600)
    gpt_response = CharField(null=False,max_length=409600)
    timestamp = DateTimeField(auto_now_add=True)





from django.db.models import *

# Create your models here.



class User(Model):
    username = CharField(max_length=100, unique=False)


class ChatMessage(Model):
    user = ForeignKey(User, on_delete=CASCADE)
    user_input = CharField(null=False,max_length=409600)
    gpt_response = CharField(null=False,max_length=409600)
    timestamp = DateTimeField(auto_now_add=True)

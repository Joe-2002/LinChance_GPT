from rest_framework.serializers import *
from .models import ChatHistory, ChatMessage

class ChatMessageSerializer(ModelSerializer):
    class Meta:
        model = ChatMessage
        fields = '__all__'

class ChatHistorySerializer(ModelSerializer):
    messages = ChatMessageSerializer(many=True, read_only=True)

    class Meta:
        model = ChatHistory
        fields = '__all__'

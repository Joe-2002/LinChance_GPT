from apps.GPT_app.models import *   
from rest_framework.serializers import *

class GptSerializer(Serializer):
    class Meta:
        model = ChatHistory,ChatMessage
        fields = '__all__'
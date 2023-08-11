from apps.LinChance_GPT_a.models import *
from rest_framework.serializers import *

class GptSerializer(Serializer):
    class Meta:
        model = ChatHistory,ChatMessage
        fields = '__all__'
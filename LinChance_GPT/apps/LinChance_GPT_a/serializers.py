from apps.LangChain.models import *
from rest_framework.serializers import *

class GptSerializer(Serializer):
    class Meta:
        model = User,ChatMessage
        fields = '__all__'
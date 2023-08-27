from rest_framework import serializers
from apps.Faiss_app.models import Faiss_data

class FaissDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faiss_data
        fields = '__all__'

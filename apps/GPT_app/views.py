from rest_framework.decorators import action
from rest_framework.response import Response
from django.http import JsonResponse
from .models import *
from .serializers import GptSerializer
from rest_framework.viewsets import ModelViewSet
from apps.GPT_app.GPT_API.gpt import get_completion
from langchain.llms import OpenAI
from langchain.agents import load_tools
from langchain.agents import initialize_agent
import os
from datetime import datetime
from rest_framework import status
from apps.GPT_app.GPT_API.spark import *
from apps.GPT_app.Lin_FAISS.MyFaiss import *
from apps.GPT_app.Prompts.lin_prompt import *
from langchain.text_splitter import CharacterTextSplitter
from langchain.document_loaders import *
# Create your views here.



os.environ['OPENAI_API_KEY'] = openai_api_key = '' 
os.environ["SERPAPI_API_KEY"] = "d6608634b82b7ab0c1256d361e541067da80454526b33481775724916e8e5fea"

### GPT3.5
class ChatMessageViewSet(ModelViewSet):
    queryset = ChatMessage.objects.all()
    serializer_class = GptSerializer

    @action(detail=False, methods=['post'])
    def chat_with_gpt(self, request):
        data = request.data
        user_input = data.get('user_input', '')

        # 创建新的历史纪录
        chat_history = ChatHistory.objects.create()

        # 构建对话提示
        prompt = f"Start the conversation:User: {user_input}Chat history:"
        for message in chat_history.messages.all():
            prompt += f"User: {message.user_input}GPT: {message.gpt_response}"
        
        # 获取AI回复
        gpt_response = get_completion(prompt)

        print (gpt_response)
        # 创建并保存这些会话
        chat_message = ChatMessage.objects.create(chat_history=chat_history, user_input=user_input, gpt_response=gpt_response)
        print(chat_message)
        return Response({'response': gpt_response}, status=status.HTTP_201_CREATED)

### Spark
    @action(detail=False, methods=['post'])
    def chat_with_Spark(self, request):
        data = request.data
        user_input = data.get('user_input', '')
        start_new_conversation = data.get('start_new_conversation', False)  # 新开始一轮对话的参数

        if start_new_conversation:
            # 创建新的历史纪录
            chat_history = ChatHistory.objects.create()
        else:
            # 获取最新的历史纪录
            chat_history = ChatHistory.objects.latest('timestamp')

    # user_input = request.GET.get("user_input", "")
    # start_new_conversation = request.GET.get("start_new_conversation", "") == "true"

        # 构建对话提示
        prompt = f"Start the conversation:User: {user_input}Chat history:"
        for message in chat_history.messages.all():
            prompt += f"User: {message.user_input}GPT: {message.gpt_response}"

        chat_history = ChatHistory.objects.create() if start_new_conversation else ChatHistory.objects.last()

        gpt_response, history = SparkLLM(question=user_input, history=list(chat_history.messages.all()))  
        # # 获取AI回复
        # gpt_response, history = SparkLLM(question=user_input, history=[] if start_new_conversation else chat_history.messages.all())

        # 创建并保存这些会话
        chat_message = ChatMessage.objects.create(chat_history=chat_history, user_input=user_input, gpt_response=gpt_response)
        print (chat_message)
        return JsonResponse({'response': gpt_response})

### Chat History
    @action(detail=False, methods=['get', 'post'])
    def chat_history(self, request):
        start_timestamp = request.data.get('start_timestamp')
        end_timestamp = request.data.get('end_timestamp')
        
        if start_timestamp and end_timestamp:
            chat_histories = ChatHistory.objects.filter(timestamp__range=[start_timestamp, end_timestamp]).order_by('timestamp')
        else:
            chat_histories = ChatHistory.objects.order_by('timestamp')
        
        history_data = []
        for chat_history in chat_histories:
            messages = [{'timestamp': message.timestamp, 'user_input': message.user_input, 'gpt_response': message.gpt_response} for message in chat_history.messages.all()]
            history_data.append({'timestamp': chat_history.timestamp, 'messages': messages})
        
        return Response({'chat_history': history_data})
    

### Faiss
    @action(detail=False, methods=['post'])
    def Chat_with_Faiss(self, request):
        data = request.data
        user_input = data.get('user_input', '')
 
        query = user_input
        linfaiss = LinFaiss()
        # linfaiss.save_vec_data()
        similar_doc = linfaiss.get_similarity_documents(query)
        # print(similar_doc)
        return JsonResponse({'response': similar_doc})

# if __name__ == "__main__":
#     linfaiss = LinFaiss()
#     # linfaiss.save_vec_data()
#     query = "How to use milvus?"
#     similar_doc = linfaiss.get_similarity_documents(query)


    # @action(detail=False, methods=['post'])
    # def load_text(self,request):
    #     data = request.data
    #     text_input = data.get('user_input', '')
    #     print(text_input)







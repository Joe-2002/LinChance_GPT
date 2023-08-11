# class ChatMessageViewSet(ModelViewSet):

#     queryset = ChatMessage.objects.all()
#     serializer_class = GptSerializer

#     @action(detail=False, methods=['post'])
#     def chat_with_gpt(self, request):
#         data = request.data
#         user_input = data.get('user_input', '')
#         user_id = data.get('user_id', None)

#         user = user_id
#         # if user_id:
#         #     user = User.objects.get(pk=user_id)


#         # Construct the conversation prompt
#         prompt = f"Start the conversation:User: {user_input}Chat history:"
#         chat_history = ChatMessage.objects.filter(user=user)
#         for message in chat_history:
#             prompt += f"User: {message.user_input}GPT: {message.gpt_response}"
        
#         # Get GPT response
#         gpt_response = get_completion(prompt)
        
#         # Create and save the chat message
#         chat_message = ChatMessage.objects.create(user=user, user_input=user_input, gpt_response=gpt_response)
        
#         return JsonResponse({'response': gpt_response})
    

#     @action(detail=False, methods=['get'])
#     def chat_history(self, request):
#             user_id = request.data.get('user_id')
#             print(user_id)

#             chat_history = ChatMessage.objects.filter(user_id=user_id)
#             history_data = [{'user_input': message.user_input, 'gpt_response': message.gpt_response} for message in chat_history]
#             return JsonResponse({'chat_history': history_data})



# Create your views here.

# class ChatMessageViewSet(ModelViewSet):

#     queryset = ChatMessage.objects.all()
#     serializer_class = GptSerializer

    # @action(detail=False, methods=['post'])
    # def chat_with_gpt(self, request):
    #     data = request.data
    #     user_input = data.get('user_input', '')
    #     user_id = data.get('user_id', None)

    #     # Fetch user or create if not exists
    #     user = None
    #     if user_id:
    #         user = User.objects.get(pk=user_id)
    #     else:
    #         user = User.objects.create(username='Anonymous')

    #     # Construct the input for ChatGPT API
    #     prompt = f"Start the conversation:\nUser: {user_input}\nChat history:"
    #     chat_history = ChatMessage.objects.filter(user=user)
    #     for message in chat_history:
    #         prompt += f"\nUser: {message.user_input}\nGPT: {message.gpt_response}"

    #     # Get GPT response using your get_completion function
    #     gpt_response = get_completion(prompt) 

    #     # Create a new chat message
    #     chat_message = ChatMessage(user=user, user_input=user_input, gpt_response=gpt_response)
    #     chat_message.save()

    #     # Load tools and initialize agent
    #     llm = OpenAI()
    #     tools = load_tools(["serpapi", "llm-math"], llm=llm)
    #     agent = initialize_agent(tools, llm, agent="zero-shot-react-description", verbose=True)

    #     # Run the agent
    #     agent.run(prompt)

    #     return JsonResponse({'response': gpt_response})

    # @action(detail=False, methods=['post'])
    # def chat_with_gpt(self, request):
    #     data = request.data
    #     user_input = data.get('user_input', '')
    #     user_id = data.get('user_id', None)

    #     user = User.objects.create(user_id)
    #     # user = None
    #     # if user_id:
    #     #     user = User.objects.get(pk=user_id)

    #     # print(user)
    #     prompt = f"Start the conversation:User: {user_input}Chat history:"
    #     chat_history = ChatMessage.objects.filter(user=user_id)
    #     for message in chat_history:
    #         prompt += f"User: {message.user_input}"
    #         prompt += f"GPT: {message.gpt_response}"
        
    #     # Agent.run(gpt_response)
    #     gpt_response = get_completion(prompt) 
        

    #     chat_message = ChatMessage.objects.create(user=user, user_input=user_input, gpt_response=gpt_response)
    #     print(chat_message)


    #     return JsonResponse({'response': gpt_response})

    # @action(detail=False, methods=['get'])
    # def chat_history(self, request):
    #     user_id = request.data.get('user_id')
    #     print(user_id)

    #     chat_history = ChatMessage.objects.filter(user_id=user_id)
    #     history_data = [{'user_input': message.user_input, 'gpt_response': message.gpt_response} for message in chat_history]
    #     return JsonResponse({'chat_history': history_data})
    
    # @action(detail=False, methods=['get'])
    # def get_answer(question):
    
    #     result = chain({"question": question, "chat_history": chat_history})
    #     answer=result["answer"]
    #     chat_history.append((question,answer))
    #     return answer
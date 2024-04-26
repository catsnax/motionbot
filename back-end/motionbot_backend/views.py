from django.http import JsonResponse
from .models import Accounts, Motions
from .serializers import AccountSerializer, MotionSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def account_list(request):
    if request.method == 'GET':
        accounts = Accounts.objects.all()
        serializer =  AccountSerializer(accounts, many = True)
        print(serializer.data)
        return JsonResponse(serializer.data, safe = False)
    elif request.method == 'POST':
        print("request received")
        serializer = AccountSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
def motion_action(request):
    if request.method == 'POST':
        #print(request.data)
        serializer = MotionSerializer(data = request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        else:
            print("not success")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'GET':
        accounts = Accounts.objects.all()
        serializer =  AccountSerializer(accounts, many = True)
        print(serializer.data)
        return JsonResponse(serializer.data, safe = False)
        
        


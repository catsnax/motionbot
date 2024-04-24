from django.http import JsonResponse
from .models import Accounts, Motions
from .serializers import AccountSerializer
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
        serializer = AccountSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        
        


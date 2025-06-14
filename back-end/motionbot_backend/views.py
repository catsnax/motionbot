from django.http import JsonResponse
from .models import Accounts, Motions
from .serializers import AccountSerializer, MotionSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import random

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
    elif request.method == 'PATCH':
        print("patch request received")
        

@api_view(['PUT', 'POST'])
def motion_action(request):
    if request.method == 'POST':
        #print(request.data)
        serializer = MotionSerializer(data = request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        else:
            print(serializer.errors )
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'PUT':
        if(request.data['motionTheme'] == 'Any' and request.data['motionDifficulty'] == 'Any'):
            motion = Motions.objects.all()
        elif(request.data['motionTheme'] == 'Any' and request.data['motionDifficulty'] != 'Any'):
            motion = Motions.objects.filter(motionDifficulty = request.data['motionDifficulty'])
        elif(request.data['motionDifficulty'] == 'Any' and request.data['motionTheme'] != 'Any'):
            motion = Motions.objects.filter(motionTheme = request.data['motionTheme'])
        else:
            motion = Motions.objects.filter(motionTheme = request.data['motionTheme'], motionDifficulty = request.data['motionDifficulty'])

        #for hello in motion:
        #   print(hello.motionName)

        serializer = MotionSerializer(motion, many = True)
        if(len(serializer.data) != 0 and request.data['motionFormat'] == 'Asian Parliamentary'):
            randomMotion = random.sample(serializer.data, k = 3)
        elif(len(serializer.data) != 0 and request.data['motionFormat'] == 'British Parliamentary'):
            randomMotion = random.choice(serializer.data)
        else:
            randomMotion = ""

        
        print(randomMotion)

        return JsonResponse(randomMotion, safe = False)
        #return JsonResponse('', safe = False)
        
        


from rest_framework import serializers
from .models import Accounts, Motions


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accounts
        fields = ['id', 'username', 'password', 'email_address']

class MotionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Motions
        fields = ['id','motionName', 'infoSlide', 'motionTheme', 'motionDifficulty']

        
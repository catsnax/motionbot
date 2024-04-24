from rest_framework import serializers
from .models import Accounts, Motions


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accounts
        fields = ['id', 'username', 'password']

        
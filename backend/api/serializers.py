from django.contrib.auth.models import User
from rest_framework import serializers

from .models import ServiceOrder

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ["id", "username", "email", "password"]
    extra_kwargs = {"password": { "write_only": True }}
    
  def create(self, validated_data):
    user = User.objects.create_user(**validated_data)
    return user
  
class ServiceOrderSerializer(serializers.ModelSerializer):
  class Meta:
    model = ServiceOrder
    fields = ['created_at']
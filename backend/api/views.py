from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny

from .serializers import UserSerializer
from .serializers import ServiceOrderSerializer

from .models import ServiceOrder

# Create your views here.
class CreateUserView(generics.CreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [AllowAny]


class CreateServiceOrderView(generics.ListCreateAPIView):
  serializer_class = ServiceOrderSerializer
  permission_classes = [IsAuthenticated]
  
  def get_queryset(self):
    user = self.request.user
    return ServiceOrder.objects.all
  
  def perform_create(self, serializer):
    if serializer.is_valid():
      serializer.save()
    else:
      print(serializer.errors)

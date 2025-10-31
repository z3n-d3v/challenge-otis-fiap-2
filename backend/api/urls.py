from django.urls import path
from . import views

urlpatterns = [
  path('service-orders/', views.CreateServiceOrderView.as_view(), name='service-order-list')
]
from django.urls import path
from . import views

urlpatterns = [
  path('service-orders/', views.CreateServiceOrderView.as_view(), name='service-order-list'),
  path('csv-import/', views.ImportServiceOrderView.as_view(), name='import-csv'),
  path('csv-export/', views.ExportServiceOrderView.as_view(), name='export-csv'),
]
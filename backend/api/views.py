from django.shortcuts import render
from django.http import HttpResponse

from django.contrib.auth.models import User

import csv, io

from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.renderers import BaseRenderer

from .serializers import UserSerializer
from .serializers import ServiceOrderSerializer

from .models import ServiceOrder

import pdb, logging

logger = logging.getLogger(__name__)

class CSVRenderer(BaseRenderer):
  media_type = 'text/csv'
  format = 'csv'

  def render(self, data, media_type=None, renderer_context=None):
      return data

# Create your views here.
class CreateUserView(generics.CreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [AllowAny]


class CreateServiceOrderView(generics.ListCreateAPIView):
  queryset = ServiceOrder.objects.all
  serializer_class = ServiceOrderSerializer
  permission_classes = [IsAuthenticated]
  
  def perform_create(self, serializer):
    print(serializer.validated_data)
    serializer.save()

class ExportServiceOrderView(generics.ListCreateAPIView):
  queryset = ServiceOrder.objects.all()
  serializer_class = ServiceOrderSerializer
  renderer_classes = [CSVRenderer] 
  permission_classes = [AllowAny]
  
  def perform_export(self, serializer):
    pdb.set_trace()
    try:
      data = ServiceOrder.objects.all()

      if len(data) == 0:
        return Response({message: "Banco vazio!"}, status=status.HTTP_204_NO_CONTENT)

      response = HttpResponse(content_type='text/csv; charset=utf-8')
      response['Content-Disposition'] = 'attachment; filename="service_orders.csv"'

      writer = csv.writer(response)

      csv_columns = list(data[0].keys())
      writer.writerow(csv_columns)

      for item in data:
        row = [item.get(col, "") for col in csv_columns]
        writer.writerow(row)

      return response
    except Exception as ex:
      logger.info(ex, exc_info=True)

class ImportServiceOrderView(generics.ListCreateAPIView):
  serializer_class = ServiceOrderSerializer
  permission_classes = [IsAuthenticated]
  
  def post(self, request):
    csv_file = request.FILES.get("file")
    
    try:
      data = csv_file.read().decode('utf-8')
    except UnicodeDecodeError:
      return Response(
        {error: "Erro ao decodificar arquivo. Por favor use o encoding UTF-8."},
        status=status.HTTP_400_BAD_REQUEST
      )
    
    io_string = io.StringIO(data)
    reader = csv.DictReader(io_string)
    
    criados, atualizados, erros = 0, 0, []
    
    for i, row in enumerate(reader, start=1):
      serializer = ServiceOrderSerializer(data=row)
      
      if serializer.is_valid():
        obj, created = ServiceOrder.objects.update_or_create(
          dtaAssinatura=row['dtaAssinatura'],
          dscSigla=row['dscSigla'],
          dscFilialInstalacao=row['dscFilialInstalacao'],
          cod_contrato=row['cod_contrato'],
          cod_unidade=row['cod_unidade'],
          codtipoproduto=row['codtipoproduto'],
          qtdparada=row['qtdparada'],
          dta_Liberacao_local_Cliente=row['dta_Liberacao_local_Cliente'],
          dtaEntrega_contrato=row['dtaEntrega_contrato'],
          dt_fabr=row['dt_fabr'],
          dscStatusEventoUnidade=row['dscStatusEventoUnidade'],
          dtaEmbarque_plan=row['dtaEmbarque_plan'],
          dtaEmbaque_efetivacao=row['dtaEmbaque_efetivacao'],
          idfclassifcontrato=row['idfclassifcontrato'],
          dscEndereço=row['dscEndereço'],
          dsccidade=row['dsccidade'],
          dscbairro=row['dscbairro'],
          codEvento=row['codEvento'],
          dtaEvento=row['dtaEvento'],
          dscNomeCliente=row['dscNomeCliente'],
          codreprvendas=row['codreprvendas'],
          dscnomeobra=row['dscnomeobra'],
          idfContratoMajor=row['idfContratoMajor'],
          MISCELANEAS=row['MISCELANEAS'],
          HORA_Instalacao=row['HORA_Instalacao'],
          HORA_AJUSTE=row['HORA_AJUSTE'],
          Total=row['Total'],
          numFilial=row['numFilial'],
          Material_Completo=row['Material_Completo'],
          Dta_Material_completo=row['Dta_Material_completo'],
          StatusFinanceiro=row['StatusFinanceiro'],
          LibObra=row['LibObra'],
          ParcelasAtrasadas=row['ParcelasAtrasadas'],
          Frete=row['Frete'],
          StatusObra=row['StatusObra'],
          Situação_da_unidade=row['Situação_da_unidade'],
          email_Supervisor=row['email_Supervisor'],
          Contato=row['Contato'],
          Telefone1=row['Telefone1'],
          Telefone2=row['Telefone2'],
          Telefone3=row['Telefone3'],
          Email=row['Email'],
          cliente=row['cliente'],
          created_at=row['created_at'],
          defaults=serializer.validated_data
        )
        
        if created:
          criados += 1
        else:
          atualizados += 1
        
      else:
        erros.append({
          linha: i,
          "erros": serializer.errors
        })
        
    return Response({
      "mensagem": "Importação concluída!",
      "criados": criados,
      "atualizados": atualizados,
      "erros": erros
    }, status=status.HTTP_200_OK)
      
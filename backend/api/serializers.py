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
    fields = ['dtaAssinatura','dscSigla','dscFilialInstalacao','cod_contrato','cod_unidade','codtipoproduto','qtdparada','dta_Liberacao_local_Cliente','dtaEntrega_contrato','dt_fabr','dscStatusEventoUnidade','dtaEmbarque_plan','dtaEmbaque_efetivacao','idfclassifcontrato','dscEndereço','dsccidade','dscbairro','codEvento','dtaEvento','dscNomeCliente','codreprvendas','dscnomeobra','idfContratoMajor','MISCELANEAS','HORA_Instalacao','HORA_AJUSTE','Total','numFilial','Material_Completo','Dta_Material_completo','StatusFinanceiro','LibObra','ParcelasAtrasadas','Frete','StatusObra','Situação_da_unidade','email_Supervisor','Contato','Telefone1','Telefone2','Telefone3','Email','cliente','created_at',]
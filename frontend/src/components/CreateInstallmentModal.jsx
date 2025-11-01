import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, Row, Col, Input, FormGroup, Label } from "reactstrap";
import api from "../api";

export const CreateInstallmentModal = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    dtaAssinatura: "",
    dscSigla: "",
    dscFilialInstalacao: "",
    cod_contrato: "",
    cod_unidade: "",
    codtipoproduto: "",
    qtdparada: "",
    dta_Liberacao_local_Cliente: "",
    dtaEntrega_contrato: "",
    dt_fabr: "",
    dscStatusEventoUnidade: "",
    dtaEmbarque_plan: "",
    dtaEmbaque_efetivacao: "",
    idfclassifcontrato: "",
    dscEndereço: "",
    dsccidade: "",
    dscbairro: "",
    codEvento: "",
    dtaEvento: "",
    dscNomeCliente: "",
    codreprvendas: "",
    dscnomeobra: "",
    idfContratoMajor: "",
    MISCELANEAS: "",
    HORA_Instalacao: "",
    HORA_AJUSTE: "",
    Total: "",
    numFilial: "",
    Material_Completo: "",
    Dta_Material_completo: "",
    StatusFinanceiro: "",
    LibObra: "",
    ParcelasAtrasadas: "",
    Frete: "",
    StatusObra: "",
    Situação_da_unidade: "",
    email_Supervisor: "",
    Contato: "",
    Telefone1: "",
    Telefone2: "",
    Telefone3: "",
    Email: "",
    cliente: "",
  });


  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      await api.post("api/service-orders/", formData);
      alert("Registro criado com sucesso!");
      setFormData({});
      window.location.reload();
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao criar registro.");
    }
  };

  return (
    <>
      <Button color="primary" onClick={toggle}>
        Criar Registro de Instalação
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Cadastrar Nova Ordem de Serviço</ModalHeader>

        <ModalBody>
          <div className="container mt-4">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Data de Assinatura</Label>
                    <Input type="datetime-local" name="dtaAssinatura" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Sigla</Label>
                    <Input name="dscSigla" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Filial de Instalação</Label>
                    <Input name="dscFilialInstalacao" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Código do Contrato</Label>
                    <Input name="cod_contrato" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Código da Unidade</Label>
                    <Input name="cod_unidade" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Tipo de Produto</Label>
                    <Input name="codtipoproduto" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Qtd. Paradas</Label>
                    <Input type="number" name="qtdparada" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Data Liberação Cliente</Label>
                    <Input type="datetime-local" name="dta_Liberacao_local_Cliente" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Data Entrega Contrato</Label>
                    <Input type="datetime-local" name="dtaEntrega_contrato" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Data Fabricação</Label>
                    <Input type="datetime-local" name="dt_fabr" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Status Evento Unidade</Label>
                    <Input name="dscStatusEventoUnidade" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Código do Evento</Label>
                    <Input name="codEvento" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Data Evento</Label>
                    <Input type="datetime-local" name="dtaEvento" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Classificação Contrato</Label>
                    <Input name="idfclassifcontrato" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Contrato Major</Label>
                    <Input name="idfContratoMajor" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Material Completo</Label>
                    <Input name="Material_Completo" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Data Material Completo</Label>
                    <Input type="datetime-local" name="Dta_Material_completo" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Status Financeiro</Label>
                    <Input name="StatusFinanceiro" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Liberação de Obra</Label>
                    <Input name="LibObra" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Parcelas Atrasadas</Label>
                    <Input type="number" name="ParcelasAtrasadas" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Frete</Label>
                    <Input name="Frete" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Status da Obra</Label>
                    <Input name="StatusObra" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Situação da Unidade</Label>
                    <Input name="Situação_da_unidade" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Número da Filial</Label>
                    <Input type="number" name="numFilial" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Hora Instalação</Label>
                    <Input type="number" step="0.01" name="HORA_Instalacao" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Hora Ajuste</Label>
                    <Input type="number" step="0.01" name="HORA_AJUSTE" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Total</Label>
                    <Input type="number" step="0.01" name="Total" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>MISCELÂNEAS</Label>
                    <Input name="MISCELANEAS" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Email Supervisor</Label>
                    <Input type="email" name="email_Supervisor" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Contato</Label>
                    <Input name="Contato" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Telefone 1</Label>
                    <Input name="Telefone1" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Telefone 2</Label>
                    <Input name="Telefone2" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Telefone 3</Label>
                    <Input name="Telefone3" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" name="Email" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Cidade</Label>
                    <Input name="dsccidade" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Bairro</Label>
                    <Input name="dscbairro" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Cliente</Label>
                    <Input name="cliente" onChange={handleChange} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Representante de Vendas</Label>
                    <Input name="codreprvendas" onChange={handleChange} />
                  </FormGroup>
                </Col>
              </Row>

              {/* --- BOTÃO --- */}
              <div className="text-center mt-4">
                <Button color="primary" type="submit">
                  Salvar Registro
                </Button>
              </div>
            </Form>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
};

import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

export const NotFound = () => {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <Row>
          <Col>
            <h1 className="display-1 fw-bold text-primary">404</h1>
            <h2 className="mb-3">Página não encontrada</h2>
            <p className="text-muted mb-4">
              A página que você procura pode ter sido movida, excluída ou não existe.
            </p>
            <Button color="primary" href="/">
              Voltar para a página inicial
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
};

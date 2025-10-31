import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner,
  Alert,
} from "reactstrap";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useNavigate } from "react-router";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post("/api/token/", { username, password });

      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

        navigate("/");
      } else {
        navigate("/register");
      }
    } catch (error) {
      setError(error)
      setLoading(false);

      console.error(error);
    }
  };

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <Row className="w-100 justify-content-center">
          <Col md={6} lg={4}>
            <Card className="shadow-sm border-0 rounded-4">
              <CardBody className="p-4">
                <CardTitle tag="h4" className="text-center mb-4 text-primary">
                  Acesse sua conta
                </CardTitle>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                      type="username"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Digite seu Username"
                      required
                    />
                  </FormGroup>

                  <FormGroup className="mt-3">
                    <Label for="password">Senha</Label>
                    <Input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Digite sua senha"
                      required
                    />
                  </FormGroup>

                  {error && <Alert color="danger">
                    Ops! Tivemos um problema com o nosso sistema, pedimos para que contate o nosso time de suporte no endereço <a type="email">supporte@otis-system.com</a>
                  </Alert>}

                  <Button color="primary" type="submit" className="w-100 mt-4">
                    Entrar

                    {loading && <Spinner className="ms-2" size="sm" />}
                  </Button>


                  <p className="text-center mt-3 mb-0">
                    <small>
                      Não tem uma conta? <a href="/register">Cadastre-se</a>
                    </small>
                  </p>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
};

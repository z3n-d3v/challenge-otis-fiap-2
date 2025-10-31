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
  Alert,
  Spinner,
} from "reactstrap";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useNavigate } from "react-router";

export const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post("/api/user/register/", {
        username: form.username,
        email: form.email,
        password: form.password,
      });

      if (res.status === 201) {
        navigate("/");
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
                  Crie sua conta
                </CardTitle>

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Digite seu nome"
                      value={form.username}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="mt-3">
                    <Label for="email">E-mail</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Digite seu e-mail"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="mt-3">
                    <Label for="password">Senha</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Crie uma senha"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="mt-3">
                    <Label for="confirmPassword">Confirmar senha</Label>
                    <Input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirme a senha"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  {error && <Alert color="danger">
                    Ops! Tivemos um problema com o nosso sistema, pedimos para que contate o nosso time de suporte no endereço <a type="email">supporte@otis-system.com</a>
                  </Alert>}

                  <Button color="primary" type="submit" className="w-100 mt-4">
                    Cadastrar

                    {loading && <Spinner className="ms-2" size="sm" />}
                  </Button>

                  <p className="text-center mt-3 mb-0">
                    <small>
                      Já tem uma conta? <a href="/login">Entrar</a>
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

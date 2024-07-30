import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useApp } from "../../hooks/useApp";

import "./loginScreen.scss";

const LoginScreen = () => {
  const userEmail = useRef(null);
  const userPassword = useRef(null);

  const { login, isAuthenticated } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = userEmail.current.value;
    const password = userPassword.current.value;

    try {
      login({ email, password });
    } catch (error) {
      console.error("Failed to login:", error);
    }
    userEmail.current.value = "";
    userPassword.current.value = "";
  };

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center p-5">
          <Col md={6} className="d-flex align-items-center">
            <h2 className="text-center mb-4 me-5">Connectez vous</h2>
            <div className="form-login p-5 text-center">
              <Form onSubmit={handleSubmit} className="loginForm">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Email:</Form.Label>
                  <Form.Control type="email" ref={userEmail} name="email" id="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label htmlFor="pwd">Password:</Form.Label>
                  <div className="mt-1 mb-2">
                    <Link href="#">Mdp oublié ?</Link>
                  </div>
                  <Form.Control
                    type="password"
                    ref={userPassword}
                    name="password"
                    id="pwd"
                    placeholder="Enter password"
                  />
                </Form.Group>
                <Button type="submit" className="btn btn-dark btn-block mt-4">
                  Login
                </Button>
              </Form>
              <div className="mt-3">
                <Link to="/profil/register">Pas de compte ?</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginScreen;

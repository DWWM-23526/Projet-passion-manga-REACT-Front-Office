import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './loginScreen.scss';
import Header from "../../layout/header/Header";

const LoginScreen = () => {
  return (
    <>
    <Header title="CONNEXION" />
      <Container fluid>
        <Row className="justify-content-center p-5">
          <Col md={6} className="d-flex align-items-center">
            <h2 className="text-center mb-4 me-5">Connectez vous</h2>
            <div className="form-login p-5 text-center">
              <Form method="post" className="loginForm">
                <Form.Group className="mb-3" >
                  <Form.Label htmlFor="email">Email:</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label htmlFor="pwd">Password:</Form.Label>
                  <div className="mt-1 mb-2">
                    <Link href="#">Mdp oublié ?</Link>
                  </div>
                  <Form.Control
                    type="password"
                    name="password"
                    id="pwd"
                    placeholder="Enter password"
                  />
                </Form.Group>
                <Button type="submit" className="btn btn-dark btn-block mt-4">Login</Button>
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

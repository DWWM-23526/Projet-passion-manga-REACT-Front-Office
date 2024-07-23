import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import './registerScreen.scss'
import Header from "../../layout/header/Header";

const RegisterScreen = () => {
  return (
    <>
    <Header title="INSCRIPTION" />
      <Container fluid>
        <Row className="justify-content-center p-5">
          <Col md={6} className="d-flex align-items-center">
            <h2 className="text-center mb-4 me-5">Enregistrez vous</h2>
            <div className="form-register p-5 text-center">
              <Form method="post">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="pseudo">Pseudo:</Form.Label>
                  <Form.Control
                    type="text"
                    name="pseudo"
                    id="pseudo"
                    placeholder="Enter pseudo"
                    required
                  />
                </Form.Group>
                <Form.Group className=" mt-4">
                  <Form.Label htmlFor="email">Email:</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label htmlFor="pwd">Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    id="pwd"
                    placeholder="Enter password"
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label htmlFor="pwd">Confirm Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password2"
                    id="pwd"
                    placeholder="Confirm your password"
                  />
                </Form.Group>
                <Button type="submit" className="btn btn-dark btn-block mt-4">
                  Submit
                </Button>
              </Form>
              <div className="mt-3">
                <Link to="/profil/login">Connectez-vous</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterScreen;

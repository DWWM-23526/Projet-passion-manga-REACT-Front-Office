import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../../hooks/useApp";
import { useState } from "react";

import PageNotFound from "../../../pages/error/PageNotFound";
import "./registerScreen.scss";

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { register, isAuthenticated } = useApp();
  const navigate = useNavigate();

  if (isAuthenticated) return <PageNotFound />;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    delete formData.password2;
    try {
      register(formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to register:", error);
    }
    setFormData({ name: "", email: "", password: "", password2: "" });
  };

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center p-5">
          <Col md={6} className="d-flex align-items-center">
            <h2 className="text-center mb-4 me-5">Enregistrez vous</h2>
            <div className="form-register p-5 text-center">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="pseudo">Pseudo:</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    id="pseudo"
                    placeholder="Enter pseudo"
                    required
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label htmlFor="pwd">Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    id="pwd"
                    placeholder="Enter password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label htmlFor="pwd">Confirm Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password2"
                    id="pwd2"
                    placeholder="Confirm your password"
                    required
                    value={formData.password2}
                    onChange={handleChange}
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

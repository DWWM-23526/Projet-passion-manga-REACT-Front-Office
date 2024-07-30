import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useApp } from "../../hooks/useApp";
import { useState } from "react";


import PageNotFound from "../../../pages/PageNotFound";
import "./registerScreen.scss";




const RegisterScreen = () => {

  const { isAuthenticated } = useApp();
  if (isAuthenticated) return <PageNotFound/>;

  const [formData, setFormData] = useState({
    pseudo: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    fetch("/api/faireleroutexD", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // TODO: Gerer reponse API
      })
      .catch((error) => console.error("Error:", error));
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
                    name="pseudo"
                    id="pseudo"
                    placeholder="Enter pseudo"
                    required
                    value={formData.pseudo}
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
                    id="pwd"
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

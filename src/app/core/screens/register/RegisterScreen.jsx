import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../../hooks/useApp";
import { useRef, useState } from "react";

import PageNotFound from "../../../pages/error/PageNotFound";
import "./registerScreen.scss";
import { handlePasswordBlur } from "./utils/handlePasswordBlur";

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { register, isAuthenticated, checkUser } = useApp();

  const navigate = useNavigate();

  const emailInputRef = useRef();
  const emailFeedbackRef = useRef();
  const passwordInputRef = useRef();
  const passwordFeedbackRef = useRef();

  const [showModal, setShowModal] = useState(false);

  if (isAuthenticated) return <PageNotFound />;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      passwordInputRef.current.classList.add("border-danger", "text-danger");
      passwordFeedbackRef.current.classList.add("text-danger");
      passwordFeedbackRef.current.classList.remove("text-success");
      passwordFeedbackRef.current.innerText =
        "Les mots de passes ne correspondent pas.";
      return;
    }
    delete formData.password2;
    try {
      register(formData);
      setShowModal(true);
    } catch (error) {
      console.error("Failed to register:", error);
    }
  };

  const handleEmailBlur = async (e) => {
    try {
      const response = await checkUser(e.target.value);
      if (response && response.length > 0) {
        const user = response.find((user) => user.email === e.target.value);
        if (user) {
          emailInputRef.current.classList.add("border-danger", "text-danger");
          emailInputRef.current.classList.remove(
            "border-success",
            "text-success"
          );
          emailFeedbackRef.current.classList.add("text-danger");
          emailFeedbackRef.current.classList.remove("text-success");
          emailFeedbackRef.current.innerText = "Cet email est déjà pris.";
        } else {
          emailInputRef.current.classList.remove(
            "border-danger",
            "text-danger"
          );
          emailInputRef.current.classList.add("border-success", "text-success");
          emailFeedbackRef.current.classList.remove("text-danger");
          emailFeedbackRef.current.classList.add("text-success");
          emailFeedbackRef.current.innerHTML = "&#10003; Email disponible";
        }
      }
    } catch (error) {
      console.error("Erreur lors de la vérification de l'email", error);
    }
  };

  const handleEmailChange = () => {
    emailInputRef.current.classList.remove("border-danger", "text-danger");
    emailInputRef.current.classList.remove("border-success", "text-success");
    emailFeedbackRef.current.innerText = "";
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/");
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
                    ref={emailInputRef}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      handleChange(e);
                      handleEmailChange(e);
                    }}
                    onBlur={handleEmailBlur}
                  />
                  <div
                    ref={emailFeedbackRef}
                    className="email-feedback fw-semibold"
                  ></div>
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label htmlFor="pwd">Password:</Form.Label>
                  <Form.Control
                    ref={passwordInputRef}
                    type="password"
                    name="password"
                    id="pwd"
                    placeholder="Enter password"
                    required
                    value={formData.password}
                    onBlur={(e) => handlePasswordBlur(e, passwordFeedbackRef)}
                    onChange={handleChange}
                  />
                  <div
                    ref={passwordFeedbackRef}
                    className="password-feedback mt-1 fw-semibold"
                  ></div>
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

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enregistrement réussi</Modal.Title>
        </Modal.Header>
        <Modal.Body>E-mail envoyé à : {formData.email}</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleModalClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterScreen;

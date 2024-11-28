import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import PageNotFound from "../../../pages/error/PageNotFound";
import { useApp } from "../../hooks/useApp";
import { useRef, useState } from "react";
import BaseService from "../../service/BaseService";
import ModalNotification from "../../../shared/components/Modal/ModalNotification";
import { useNavigate } from "react-router-dom";
import { handlePasswordBlur } from "../../utils/handlePasswordBlur";
import { validatePasswords } from "../../utils/validatePassword";
import { handleEmailResponse } from "../../utils/handleEmailResponse";

const UserScreen = () => {
  const { user, logout, setTitle, checkUser, isAuthenticated } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: "",
    password2: "",
  });

  const navigate = useNavigate();

  const emailInputRef = useRef();
  const emailFeedbackRef = useRef();
  const passwordInputRef = useRef();
  const passwordFeedbackRef = useRef();

  const baseService = new BaseService();
  const token = baseService._getAuthToken();

  if (!isAuthenticated) return <PageNotFound />;

  setTitle(user.name);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmailBlur = async (e) => {
    try {
      const response = await checkUser(e.target.value);
      handleEmailResponse(
        response,
        emailInputRef,
        emailFeedbackRef,
        e.target.value
      );
    } catch (error) {
      console.error("Erreur lors de la vérification de l'email", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordMatch = validatePasswords(
      formData.password,
      formData.password2,
      passwordInputRef,
      passwordFeedbackRef
    );

    if (!passwordMatch) {
      return;
    }

    delete formData.password2;
    try {
      const userId = user.id;
      const response = await fetch(
        `http://api-passion-manga/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setModalMessage("Profil bien modifié !");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Erreur de connexion API: ", error);
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
    logout();
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    setShowDeleteModal(false);
    try {
      const userId = user.id;
      const response = await fetch(
        `http://api-passion-manga/api/users/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        navigate("/");
        logout();
      }
    } catch (error) {
      console.error("Erreur de connexion API: ", error);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center p-5">
          <Col md={6} className="d-flex align-items-center">
            <h2 className="text-center mb-4 me-5">Modifiez votre profil</h2>
            <div className="form-register p-5 text-center">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="name">Nom :</Form.Label>
                  <Form.Control
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Modifiez votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Email :</Form.Label>
                  <Form.Control
                    ref={emailInputRef}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Modifiez votre email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleEmailBlur}
                    required
                  />
                  <div
                    ref={emailFeedbackRef}
                    className="email-feedback fw-semibold"
                  ></div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="pwd">Password :</Form.Label>
                  <Form.Control
                    ref={passwordInputRef}
                    type="password"
                    name="password"
                    id="password1"
                    placeholder="Modifiez votre mot de passe"
                    value={formData.password}
                    onBlur={(e) => handlePasswordBlur(e, passwordFeedbackRef)}
                    onChange={(e) => {
                      handleChange(e);
                      handleEmailChange(e);
                    }}
                    required
                  />
                  <div
                    ref={passwordFeedbackRef}
                    className="password-feedback mt-1 fw-semibold"
                  ></div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="pwd">Confirm Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder="Confirmez votre mot de passe"
                    required
                    value={formData.password2}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button type="submit" className="btn-dark mt-4">
                  Mettre à jour
                </Button>
              </Form>
              <Button
                type="button"
                className="btn-danger mt-3"
                onClick={handleDeleteClick}
              >
                Supprimer le compte
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <ModalNotification
        show={showModal}
        onHide={handleModalClose}
        title="Modification du profil"
        message={modalMessage}
      />

      <Modal show={showDeleteModal} onHide={handleDeleteCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation de suppression</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de vouloir supprimer votre compte ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteCancel}>
            Non
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Oui
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserScreen;

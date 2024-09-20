import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useApp } from "../../hooks/useApp";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ModalNotification from "../../../shared/components/Modal/ModalNotification";
import { useState } from "react";

const ForgottenPasswordScreen = () => {
    const {setTitle} = useApp();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
      });
    
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const {forgottenPassword} = useApp();
    
    setTitle("OUBLIE D'EMAIL");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            forgottenPassword(formData);
            setModalMessage("E-mail envoyé !");
            setShowModal(true);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    }

    const handleModalClose = () => {
        setShowModal(false);
        navigate("/");
    }

    return (
    <>
        <Container fluid className="my-4">
                <Button
                    variant="link"
                    onClick={() => navigate(-1)}
                    className=" text-decoration-none">
                    <FaArrowLeft size={30} />
                </Button>
            <Row className="justify-content-center p-5">
                <Col md={6} className="d-flex align-items-center">
                    <h2 className="text-center mb-4 me-5">Renseignez votre e-mail</h2>
                    <div className="form-login">
                    <Form onSubmit={handleSubmit} className="p-5 text-center">
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="email">Email:</Form.Label>
                            <Form.Control
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Entrez votre email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </Form.Group>
                        <Button type="submit" className="btn btn-dark btn-block mt-4">
                            Envoyer
                        </Button>
                    </Form>
                    </div>
                </Col>
            </Row>
        </Container>
        <ModalNotification
        show={showModal}
        onHide={handleModalClose}
        title="Envoi d'email"
        message={modalMessage}
        />
    </>
    );
}

export default ForgottenPasswordScreen;
import { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { validatePasswords } from "../utils/validatePassword";
import { handlePasswordBlur } from "../utils/handlePasswordBlur";

const UpdatePasswordScreen = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
      });

    const passwordInputRef = useRef();
    const passwordFeedbackRef = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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

    }

    return (
        <Container fluid className="my-4">
            <Row className="justify-content-center p-5">
                <Col md={6} className="d-flex align-items-center">
                <h2 className="text-center mb-4 me-5">Modifiez votre mot de passe</h2>
                <div className="form-register p-5 text-center">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="pwd">Mot de passe:</Form.Label>
                            <Form.Control
                            type="password"
                            name="password"
                            id="pwd"
                            placeholder="Entrez votre mot de passe"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            onBlur={(e) => handlePasswordBlur(e, passwordFeedbackRef)}
                            />
                            <div
                    ref={passwordFeedbackRef}
                    className="password-feedback mt-1 fw-semibold"
                    ></div>
                        </Form.Group>
                        <Form.Group className="mt-4">
                    <Form.Label htmlFor="pwd">Confirmez votre mot de passe :</Form.Label>
                    <Form.Control
                    type="password"
                    name="password2"
                    id="pwd2"
                    placeholder="Confirmez votre mot de passe"
                    required
                    value={formData.password2}
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
    )
}

export default UpdatePasswordScreen;
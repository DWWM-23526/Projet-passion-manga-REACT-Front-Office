import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const ModalNotification = ({ show, onHide, title, message }) => {
  return (
    <Modal show={show} onHide={onHide} >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">{message}</Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="primary" onClick={onHide}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalNotification.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default ModalNotification;

import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const ModalLoginLogout = ({ show, onHide, message }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Notification</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalLoginLogout.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ModalLoginLogout;

import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

function CustomModal({ show, handleClose, title, children })  {
  
  return (
    <Modal isOpen={show} toggle={handleClose}>
      <ModalHeader toggle={handleClose}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          Fechar
        </Button>
        {/* Inclua aqui um botão para salvar o formulário */}
      </ModalFooter>
    </Modal>
  );
}

export default CustomModal;
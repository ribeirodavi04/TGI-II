import React, { useState } from "react";

import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";

function FornecedorForm({ show, handleClose, title, onSubmit, initialValues }) {
    const [formData, setFormData] = useState(initialValues || {
        nome: "",
        email: "",
        telefone: "",
        cnpj: "",
        endereco: "",
        observacao: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        handleClose();
    };

    return (
        <Modal isOpen={show} toggle={handleClose}>
            <ModalHeader toggle={handleClose}>{title}</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="nome">Nome</Label>
                        <Input
                            type="text"
                            name="nome"
                            id="nome"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="telefone">Telefone</Label>
                        <Input
                            type="text"
                            name="telefone"
                            id="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cnpj">CNPJ</Label>
                        <Input
                            type="text"
                            name="cnpj"
                            id="cnpj"
                            value={formData.cnpj}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="endereco">Endereço</Label>
                        <Input
                            type="text"
                            name="endereco"
                            id="endereco"
                            value={formData.endereco}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="observacoes">Observação</Label>
                        <Input
                            type="textarea"
                            name="observacoes"
                            id="observacoes"
                            value={formData.observacoes}
                            onChange={handleChange}
                        />
                    </FormGroup>

                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" type="submit" onClick={handleSubmit}>
                    Salvar
                </Button>
                <Button color="secondary" onClick={handleClose} className="ml-auto">
                    Fechar
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default FornecedorForm;

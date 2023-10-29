import React from "react";
import FornecedorForm from "components/Forms/FornecedorForm";
import { useState, useEffect } from "react";
import { getFornecedores } from "services/FornecedorService";
import { createFornecedor } from "services/FornecedorService";
import { getFornecedor } from "services/FornecedorService";

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
    Button
} from "reactstrap";

function Fornecedor() {
    const [showModal, setShowModal] = useState(false);
    const [editingFornecedor, setEditingFornecedor] = useState(null);
    const [fornecedores, setFornecedores] = useState([]);

    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
        setEditingFornecedor(null); // Limpe o fornecedor sendo editado quando o modal é fechado
    };

    const fetchFornecedores = async () => {
        try {
            const data = await getFornecedores();
            setFornecedores(data);
        } catch (error) {
            console.error('Erro ao buscar fornecedores:', error);
        }
    };

    useEffect(() => {
        fetchFornecedores();
    }, []);

    const handleEditFornecedor = async (fornecedorId) => {
        try {
            const response = await getFornecedor(fornecedorId); // Implemente a função para buscar detalhes do fornecedor
            const fornecedor = response.json();
     
            setEditingFornecedor(fornecedor);

            handleShow();
        } catch (error) {
            console.error('Erro ao buscar detalhes do fornecedor:', error);
        }
    };
    

    const handleSaveFornecedor = async (formData) => {
        if (editingFornecedor) {
            // Lógica de atualização
        } else {
            await createFornecedor(formData);
            fetchFornecedores();
            handleClose(true)
        }
    };

    return (
        <>
            <FornecedorForm show={showModal}
                handleClose={handleClose}
                title={editingFornecedor ? "Editar Fornecedor" : "Cadastrar Fornecedor"}
                onSubmit={handleSaveFornecedor}
                initialValues={editingFornecedor}
            />

            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <div className="d-flex justify-content-between">
                                    <CardTitle tag="h4">Fornecedor</CardTitle>
                                    <Button color="primary" onClick={handleShow}>Cadastrar</Button>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Nome</th>
                                            <th>Email</th>
                                            <th>CNPJ</th>
                                            <th>Telefone</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {fornecedores.map((fornecedor) => (
                                            <tr>
                                                <td>{fornecedor.nome}</td>
                                                <td>{fornecedor.email}</td>
                                                <td>{fornecedor.cnpj}</td>
                                                <td>{fornecedor.telefone}</td>
                                                <td>
                                                    <Button color="primary" className="mr-2"  onClick={() => handleEditFornecedor(fornecedor.id_fornecedor)}>
                                                        <i className="nc-icon nc-ruler-pencil"></i>
                                                    </Button>
                                                    <Button color="danger">
                                                        <icons className="nc-icon nc-simple-remove"></icons>
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Fornecedor;

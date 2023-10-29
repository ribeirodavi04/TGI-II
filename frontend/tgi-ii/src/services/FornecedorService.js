import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:3333/api'; // Substitua pela URL da sua API

// Função para fazer uma solicitação GET
export const getFornecedores = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/fornecedor`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Função para fazer uma solicitação GET
export const getFornecedor = async (idFornecedor) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/fornecedor/${idFornecedor}` );
        return response.data;
    } catch (error) {
        throw error;
    }
};


// Função para fazer uma solicitação POST
export const createFornecedor = async (novoFornecedor) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/fornecedor`, novoFornecedor);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Função para fazer uma solicitação PUT para atualizar um fornecedor
export const updateFornecedor = async (fornecedorId, dadosAtualizados) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/fornecedor/${fornecedorId}`, dadosAtualizados);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Função para fazer uma solicitação DELETE para excluir um fornecedor
export const deleteFornecedor = async (fornecedorId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/fornecedor/${fornecedorId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
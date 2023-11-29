'use strict'
const Cliente = use('App/Models/Cliente');

class ClienteController {
    async index({ response }) {
        const clientes = await Cliente.query().orderBy('created_at', 'desc').fetch();
        return response.json(clientes);
    }

    async show({ params, response }) {
        const cliente = await Cliente.find(params.id);
        return response.json(cliente);
    }

    async store({ request, response }) {
        const data = request.only(['nome', 'cpf_cnpj', 'email', 'endereco', 'telefone', 'observacoes']);
        const novoCliente = new Cliente();
        novoCliente.fill(data);
        try {
            await novoCliente.save();
            return response.status(201).json(novoCliente);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: 'Erro ao inserir cliente.' });
        }
    }

    async update({ params, request, response }) {
        const cliente = await Cliente.find(params.id);
        const data = request.only(['nome', 'cpf_cnpj', 'email', 'endereco', 'telefone', 'observacoes']);
        cliente.merge(data);

        try {
            await cliente.save();
            return response.json(cliente);
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao atualizar cliente.' });
        }
    }

    async destroy({ params, response }) {
        const cliente = await Cliente.find(params.id);

        try {
            await cliente.delete();
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao excluir cliente.' });
        }
    }
}

module.exports = ClienteController

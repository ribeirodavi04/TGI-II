'use strict'

const Escritorio = use('App/Models/Escritorio');

class EscritorioController {
    async index({ response }) {
        const escritotios = await Escritorio.all();
        return response.json(escritotios);
    }

    async show({ params, response }) {
        const escritorio = await Escritorio.find(params.id);
        return response.json(escritorio);
    }

    async store({ request, response }) {
        const data = request.only(['nome', 'tipo', 'endereco', 'telefone', 'email', 'cpf_cnpj']);
        const novoEscritorio = new Escritorio();
        novoEscritorio.fill(data);
        try {
            await novoEscritorio.save();
            return response.status(201).json(novoEscritorio);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: 'Erro ao inserir escritorio.' });
        }
    }

    async update({ params, request, response }) {
        const escritorio = await Escritorio.find(params.id);
        const data = request.only(['nome', 'tipo', 'endereco', 'telefone', 'email', 'cpf_cnpj']);
        escritorio.merge(data);

        try {
            await escritorio.save();
            return response.json(escritorio);
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao atualizar escritorio.' });
        }
    }

    async destroy({ params, response }) {
        const escritorio = await Escritorio.find(params.id);

        try {
            await escritorio.delete();
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao excluir escritorio.' });
        }
    }
}

module.exports = EscritorioController

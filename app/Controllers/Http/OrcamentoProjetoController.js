'use strict'

const OrcamentoProjeto = use('App/Models/OrcamentoProjeto');

class OrcamentoProjetoController {
    async index({ response }) {
        const orcamentos = await OrcamentoProjeto.all();
        return response.json(orcamentos);
    }

    async show({ params, response }) {
        const orcamento = await OrcamentoProjeto.find(params.id);
        return response.json(orcamento);
    }

    async store({ request, response }) {
        const data = request.only(['id_projeto', 'nome', 'valor', 'porcentagem_desconto', 'observacoes']);
        const novoOrcamento = new OrcamentoProjeto();
        novoOrcamento.fill(data);

        try {
            await novoOrcamento.save();
            return response.status(201).json(novoOrcamento);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: 'Erro ao inserir orçamento de projeto.' });
        }
    }

    async update({ params, request, response }) {
        const orcamento = await OrcamentoProjeto.find(params.id);
        const data = request.only(['id_projeto', 'nome', 'valor', 'porcentagem_desconto', 'observacoes']);
        orcamento.merge(data);

        try {
            await orcamento.save();
            return response.json(orcamento);
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao atualizar orçamento de projeto.' });
        }
    }

    async destroy({ params, response }) {
        const orcamento = await OrcamentoProjeto.find(params.id);

        try {
            await orcamento.delete();
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao excluir orçamento de projeto.' });
        }
    }
}

module.exports = OrcamentoProjetoController

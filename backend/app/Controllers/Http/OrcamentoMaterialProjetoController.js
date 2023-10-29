'use strict'

const OrcamentoMaterialProjeto = use('App/Models/OrcamentoMaterialProjeto');

class OrcamentoMaterialProjetoController {
    async index({ response }) {
        const orcamentos = await OrcamentoMaterialProjeto.all();
        return response.json(orcamentos);
    }

    async show({ params, response }) {
        const orcamento = await OrcamentoMaterialProjeto.find(params.id);
        return response.json(orcamento);
    }

    async store({ request, response }) {
        const data = request.only(['id_projeto', 'id_material', 'quantidade', 'porcentagem_desconto']);
        const novoOrcamento = new OrcamentoMaterialProjeto();
        novoOrcamento.fill(data);

        try {
            await novoOrcamento.save();
            return response.status(201).json(novoOrcamento);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: 'Erro ao inserir orçamento de material do projeto.' });
        }
    }

    async update({ params, request, response }) {
        const orcamento = await OrcamentoMaterialProjeto.find(params.id);
        const data = request.only(['id_projeto', 'id_material', 'quantidade', 'porcentagem_desconto']);
        orcamento.merge(data);

        try {
            await orcamento.save();
            return response.json(orcamento);
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao atualizar orçamento de material do projeto.' });
        }
    }

    async destroy({ params, response }) {
        const orcamento = await OrcamentoMaterialProjeto.find(params.id);

        try {
            await orcamento.delete();
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao excluir orçamento de material do projeto.' });
        }
    }
}

module.exports = OrcamentoMaterialProjetoController

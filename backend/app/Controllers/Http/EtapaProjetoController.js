'use strict'

const EtapaProjeto = use('App/Models/EtapaProjeto');


class EtapaProjetoController {
    async index({ response }) {
        const etapasProjeto = await EtapaProjeto.all();
        return response.json(etapasProjeto);
    }

    async show({ params, response }) {
        const etapaProjeto = await EtapaProjeto.find(params.id);
        return response.json(etapaProjeto);
    }

    async store({ request, response }) {
        const data = request.only(['id_projeto', 'nome', 'status', 'observacao', 'data_inicio', 'data_final']);
        const novaEtapaProjeto = new EtapaProjeto();
        novaEtapaProjeto.fill(data);

        try {
            await novaEtapaProjeto.save();
            return response.status(201).json(novaEtapaProjeto);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: 'Erro ao inserir etapa do projeto.' });
        }
    }

    async update({ params, request, response }) {
        const etapaProjeto = await EtapaProjeto.find(params.id);
        const data = request.only(['id_projeto', 'nome', 'status', 'observacao', 'data_inicio', 'data_final']);
        etapaProjeto.merge(data);

        try {
            await etapaProjeto.save();
            return response.json(etapaProjeto);
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao atualizar etapa do projeto.' });
        }
    }

    async destroy({ params, response }) {
        const etapaProjeto = await EtapaProjeto.find(params.id);

        try {
            await etapaProjeto.delete();
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao excluir etapa do projeto.' });
        }
    }
}

module.exports = EtapaProjetoController

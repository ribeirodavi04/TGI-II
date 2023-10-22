'use strict'

const Projeto = use('App/Models/Projeto');

class ProjetoController {
    async index({ response }) {
        const projetos = await Projeto.all();
        return response.json(projetos);
    }

    async show({ params, response }) {
        const projeto = await Projeto.find(params.id);
        return response.json(projeto);
    }

    async store({ request, response }) {
        const data = request.only(['id_cliente', 'id_usuario_responsavel', 'nome', 'endereco', 'tipo', 'descricao', 'data_inicio', 'data_final']);
        const novoProjeto = new Projeto();
        novoProjeto.fill(data);

        try {
            await novoProjeto.save();
            return response.status(201).json(novoProjeto);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: 'Erro ao inserir projeto.' });
        }
    }

    async update({ params, request, response }) {
        const projeto = await Projeto.find(params.id);
        const data = request.only(['id_cliente', 'id_usuario_responsavel', 'nome', 'endereco', 'tipo', 'descricao', 'data_inicio', 'data_final']);
        projeto.merge(data);

        try {
            await projeto.save();
            return response.json(projeto);
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao atualizar projeto.' });
        }
    }

    async destroy({ params, response }) {
        const projeto = await Projeto.find(params.id);

        try {
            await projeto.delete();
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao excluir projeto.' });
        }
    }

    async showAllInfo({ params, response }) {
        const projeto = await Projeto.query()
            .with('orcamentoMateriaisProjeto')
            .with('orcamentosProjeto')
            .with('documentosProjeto')
            .with('imagensProjeto')
            .with('etapasProjeto')
            .with('cliente')
            .with('usuario')
            .where('id_projeto', params.id)
            .first();

        if (!projeto) {
            return response.status(404).json({ error: 'Projeto não encontrado' });
        }

        return response.json(projeto);
    }
}

module.exports = ProjetoController

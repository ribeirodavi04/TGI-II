'use strict'

const DocumentoProjeto = use('App/Models/DocumentoProjeto');

class DocumentoProjetoController {
    async index({ response }) {
        const documentos = await DocumentoProjeto.all();
        return response.json(documentos);
    }

    async show({ params, response }) {
        const documento = await DocumentoProjeto.find(params.id);
        return response.json(documento);
    }

    async store({ request, response }) {
        const data = request.only(['id_projeto', 'nome', 'tipo', 'observacoes']);
        const novoDocumento = new DocumentoProjeto();
        novoDocumento.fill(data);

        try {
            await novoDocumento.save();
            return response.status(201).json(novoDocumento);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: 'Erro ao inserir documento de projeto.' });
        }
    }

    async update({ params, request, response }) {
        const documento = await DocumentoProjeto.find(params.id);
        const data = request.only(['id_projeto', 'nome', 'tipo', 'observacoes']);
        documento.merge(data);

        try {
            await documento.save();
            return response.json(documento);
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao atualizar documento de projeto.' });
        }
    }

    async destroy({ params, response }) {
        const documento = await DocumentoProjeto.find(params.id);

        try {
            await documento.delete();
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao excluir documento de projeto.' });
        }
    }
}

module.exports = DocumentoProjetoController

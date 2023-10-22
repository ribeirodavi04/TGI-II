'use strict'

const ImagemProjeto = use('App/Models/ImagemProjeto');

class ImagemProjetoController {
    async index({ response }) {
        const imagens = await ImagemProjeto.all();
        return response.json(imagens);
    }

    async show({ params, response }) {
        const imagem = await ImagemProjeto.find(params.id);
        return response.json(imagem);
    }

    async store({ request, response }) {
        const data = request.only(['id_projeto', 'nome', 'tipo', 'observacoes', 'url']);
        const novaImagem = new ImagemProjeto();
        novaImagem.fill(data);

        try {
            await novaImagem.save();
            return response.status(201).json(novaImagem);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: 'Erro ao inserir imagem de projeto.' });
        }
    }

    async update({ params, request, response }) {
        const imagem = await ImagemProjeto.find(params.id);
        const data = request.only(['id_projeto', 'nome', 'tipo', 'observacoes', 'url']);
        imagem.merge(data);

        try {
            await imagem.save();
            return response.json(imagem);
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao atualizar imagem de projeto.' });
        }
    }

    async destroy({ params, response }) {
        const imagem = await ImagemProjeto.find(params.id);

        try {
            await imagem.delete();
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao excluir imagem de projeto.' });
        }
    }
}

module.exports = ImagemProjetoController

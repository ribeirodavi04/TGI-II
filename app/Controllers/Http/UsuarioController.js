'use strict'
const Usuario = use('App/Models/Usuario');
const Hash = use('Hash');

class UsuarioController {
    async index({ response }) {
        const usuarios = await Usuario.all();
        return response.json(usuarios);
    }

    async show({ params, response }) {
        const usuario = await Usuario.find(params.id);
        return response.json(usuario);
    }

    async store({ request, response }) {
        const data = request.only(['id_escritorio', 'id_permissao_usuario', 'nome', 'nome_usuario', 'email', 'senha', 'telefone', 'cpf', 'data_nascimento', 'genero', 'endereco', 'imagem']);
        data.senha = await Hash.make(data.senha);
        const novoUsuario = new Usuario();
        novoUsuario.fill(data);

        try {
            await novoUsuario.save();
            return response.status(201).json(novoUsuario);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: 'Erro ao inserir usuário.' });
        }
    }

    async update({ params, request, response }) {
        const usuario = await Usuario.find(params.id);
        const data = request.only(['id_escritorio', 'id_permissao_usuario', 'nome', 'nome_usuario', 'email', 'senha', 'telefone', 'cpf', 'data_nascimento', 'genero', 'endereco', 'imagem']);
        data.senha = await Hash.make(data.senha);
        usuario.merge(data);

        try {
            await usuario.save();
            return response.json(usuario);
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao atualizar usuário.' });
        }
    }

    async destroy({ params, response }) {
        const usuario = await Usuario.find(params.id);

        try {
            await usuario.delete();
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao excluir usuário.' });
        }
    }
}

module.exports = UsuarioController

'use strict'

const PermissaoUsuario = use('App/Models/PermissaoUsuario');

class PermissaoUsuarioController {
    async index({ response }) {
        const permissaoUsuarios = await PermissaoUsuario.all();
        return response.json(permissaoUsuarios);
    }

    async show({ params, response }) {
        const permissaoUsuario = await PermissaoUsuario.find(params.id);
        return response.json(permissaoUsuario);
    }

    async store({ request, response }) {
        const data = request.only(['descricao']);
        const novoPermissaoUsuario = new PermissaoUsuario();
        novoPermissaoUsuario.fill(data);
        try {
            await novoPermissaoUsuario.save(); debugger;
            return response.status(201).json(novoPermissaoUsuario); debugger;
        } catch (error) {
            console.log(error) 
            return response.status(500).json({ error: 'Erro ao inserir permissao.' });
        }
    }

    async update({ params, request, response }) {
        const permissaoUsuario = await PermissaoUsuario.find(params.id);
        const data = request.only(['descricao']);
        permissaoUsuario.merge(data);

        try {
            await permissaoUsuario.save();
            return response.json(permissaoUsuario);
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao atualizar permissao.' });
        }
    }

    async destroy({ params, response }) {
        const permissaoUsuario = await PermissaoUsuario.find(params.id);

        try {
            await permissaoUsuario.delete();
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao excluir permissao.' });
        }
    }
}

module.exports = PermissaoUsuarioController

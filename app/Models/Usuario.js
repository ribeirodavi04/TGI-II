'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {
    static get table() {
        return 'tbl_usuario';
    }

    static get primaryKey() {
        return 'id_usuario';
    }

    static get fillable() {
        return ['id_usuario','id_escritorio', 'id_permissao_usuario', 'nome', 'nome_usuario', 'email', 'senha', 'telefone', 'cpf', 'data_nascimento', 'genero', 'endereco', 'imagem' ];
    }

    static get rules() {
        return {
            id_escritorio: 'required',
            id_permissao_usuario: 'required',
            nome: 'required|nome|max:50',
            nome_usuario: 'required|nome_usuario|max:50',
            email: 'required|email|max:100',
            senha: 'required|senha|max:50',
            data_nascimento: 'required|data_nascimento|max:50',
            genero: 'required|genero|max:50',
            endereco: 'required|endereco|max:50',
            imagem: 'file_ext:png,jpg,jpeg',
        };
    }
}

module.exports = Usuario

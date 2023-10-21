'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Projeto extends Model {
    static get table() {
        return 'tbl_projeto';
    }

    static get primaryKey() {
        return 'id_projeto';
    }

    static get fillable() {
        return ['id_cliente', 'id_usuario_responsavel', 'nome', 'endereco', 'tipo', 'descricao', 'data_inicio', 'data_final'];
    }

    static get rules() {
        return {
            id_cliente: 'required|integer',
            id_usuario_responsavel: 'required|integer',
            nome: 'required|max:100',
            endereco: 'max:150',
            tipo: 'max:50',
            descricao: 'max:100',
        };
    }

    cliente() {
        return this.belongsTo('App/Models/Cliente', 'id_cliente', 'id_cliente');
    }

    usuario() {
        return this.belongsTo('App/Models/Usuario', 'id_usuario_responsavel', 'id_usuario');
    }
}

module.exports = Projeto

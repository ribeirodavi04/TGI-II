'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DocumentoProjeto extends Model {
    static get table() {
        return 'tbl_documento_projeto';
    }

    static get primaryKey() {
        return 'id_documento_projeto';
    }

    static get fillable() {
        return ['id_projeto', 'nome', 'tipo', 'observacoes', 'url'];
    }

    projeto() {
        return this.belongsTo('App/Models/Projeto', 'id_projeto', 'id_projeto');
    }
}

module.exports = DocumentoProjeto

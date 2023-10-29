'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrcamentoProjeto extends Model {
    static get table() {
        return 'tbl_orcamento_projeto';
    }

    static get primaryKey() {
        return 'id_orcamento_projeto';
    }

    static get fillable() {
        return ['id_projeto', 'nome', 'valor', 'porcentagem_desconto', 'observacoes'];
    }

    projeto() {
        return this.belongsTo('App/Models/Projeto', 'id_projeto', 'id_projeto');
    }
}

module.exports = OrcamentoProjeto

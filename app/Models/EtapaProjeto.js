'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class EtapaProjeto extends Model {
    static get table() {
        return 'tbl_etapa_projeto';
    }

    static get primaryKey() {
        return 'id_etapa_projeto';
    }

    static get fillable() {
        return ['id_projeto', 'nome', 'status', 'observacao', 'data_inicio', 'data_final'];
    }

    static get rules() {
        return {
            id_projeto: 'required|integer',
            nome: 'required|max:100',
            status: 'max:100',
            observacao: 'max:100',
            data_inicio: 'required|date',
            data_final: 'required|date',
        };
    }

    projeto() {
        return this.belongsTo('App/Models/Projeto', 'id_projeto', 'id_projeto');
    }
}

module.exports = EtapaProjeto

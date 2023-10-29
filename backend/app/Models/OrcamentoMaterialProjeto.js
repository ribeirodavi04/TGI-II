'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrcamentoMaterialProjeto extends Model {
    static get table() {
        return 'tbl_orcamento_material_projeto';
    }

    static get primaryKey() {
        return 'id_orcamento_material_projeto';
    }

    static get fillable() {
        return ['id_projeto', 'id_material', 'quantidade', 'porcentagem_desconto'];
    }

    static get rules() {
        return {
            id_projeto: 'required|integer',
            id_material: 'required|integer',
            quantidade: 'required|integer',
            porcentagem_desconto: 'required|number',
        };
    }

    projeto() {
        return this.belongsTo('App/Models/Projeto', 'id_projeto', 'id_projeto');
    }

    material() {
        return this.belongsTo('App/Models/Material', 'id_material', 'id_material');
    }
}

module.exports = OrcamentoMaterialProjeto

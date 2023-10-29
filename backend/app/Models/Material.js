'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Material extends Model {
    static get table() {
        return 'tbl_material';
    }

    static get primaryKey() {
        return 'id_material';
    }

    static get fillable() {
        return ['id_fornecedor','nome', 'tipo', 'descricao', 'preco_unitario'];
    }

    static get rules() {
        return {
            id_fornecedor: 'required',
            nome: 'required|nome|max:50',
        };
    }
    
    fornecedor() {
        return this.belongsTo('App/Models/Fornecedor', 'id_fornecedor', 'id_fornecedor');
    }

}

module.exports = Material

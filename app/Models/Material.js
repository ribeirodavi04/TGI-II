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
        return ['nome', 'tipo', 'descricao', 'preco_unitario'];
    }

    static get rules() {
        return {
          nome: 'required|nome|max:50',
        };
    }

}

module.exports = Material

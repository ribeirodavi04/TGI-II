'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ImagemProjeto extends Model {
    static get table() {
        return 'tbl_imagem_projeto';
    }

    static get primaryKey() {
        return 'id_imagem_projeto';
    }

    static get fillable() {
        return ['id_projeto', 'nome', 'tipo', 'observacoes'];
    }

    projeto() {
        return this.belongsTo('App/Models/Projeto', 'id_projeto', 'id_projeto');
    }
}

module.exports = ImagemProjeto

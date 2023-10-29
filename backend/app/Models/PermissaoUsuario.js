'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PermissaoUsuario extends Model {
    static get table() {
        return 'tbl_permissao_usuario';
    }
    
    static get primaryKey() {
        return 'id_permissao_usuario';
    }
    
    static get fillable() {
        return ['descricao'];
    }
    
    static get rules() {
        return {
          descricao: 'required|max:100',
        };
    }
}

module.exports = PermissaoUsuario

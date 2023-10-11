'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Fornecedor extends Model {
    static get table() {
        return 'tbl_fornecedor';
    }
    
    static get primaryKey() {
        return 'id_fornecedor';
    }
    
    static get fillable() {
        return ['nome', 'idade', 'email', 'telefone', 'cnpj'];
    }
    
    // Opcional: se você desejar adicionar regras de validação
    static get rules() {
        return {
          nome: 'required|max:50',
          idade: 'integer',
          email: 'required|email|max:100',
          telefone: 'required|telefone|max:20',
          cnpj: 'required|cnpj|max:20',
        };
    }
}

module.exports = Fornecedor

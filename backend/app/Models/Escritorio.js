'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Escritorio extends Model {
    static get table() {
        return 'tbl_escritorio';
    }
    
    static get primaryKey() {
        return 'id_escritorio';
    }
    
    static get fillable() {
        return ['nome', 'tipo', 'endereco', 'telefone', 'email', 'cpf_cnpj'];
    }
    
    // Opcional: se você desejar adicionar regras de validação
    static get rules() {
        return {
          nome: 'required|max:50',
          tipo: 'required|max:50',
          endereco: 'required|email|max:100',
          telefone: 'required|telefone|max:20',
          email: 'required|cnpj|max:100',
          cpf_cnpj: 'required|cnpj|max:50',
        };
    }
}

module.exports = Escritorio

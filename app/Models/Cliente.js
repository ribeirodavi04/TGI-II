'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {
    static get table() {
        return 'tbl_cliente';
    }
    
    static get primaryKey() {
        return 'id_cliente';
    }
    
    static get fillable() {
        return ['nome', 'cpf_cnpj', 'email', 'endereco', 'telefone', 'observacoes'];
    }
    
    // Opcional: se você desejar adicionar regras de validação
    static get rules() {
        return {
          nome: 'required|max:50',
          cpf_cnpj: 'required|max:50',
          email: 'required|max:50',
          endereco: 'required|max:100',
          telefone: 'required|max:20',
          observacoes: 'max:200',
        };
    }
}

module.exports = Cliente

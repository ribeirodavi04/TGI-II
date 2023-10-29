'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TabelaClienteSchema extends Schema {
  up () {
    this.create('tbl_cliente', (table) => {
      table.increments('id_cliente').primary();
      table.string('nome', 50);
      table.string('cpf_cnpj', 50);
      table.string('email', 50);
      table.string('endereco', 100);
      table.string('telefone', 20);
      table.string('observacoes', 200);
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_cliente')
  }
}

module.exports = TabelaClienteSchema

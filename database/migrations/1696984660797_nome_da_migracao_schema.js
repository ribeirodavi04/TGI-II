'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NomeDaMigracaoSchema extends Schema {
  up() {
    this.create('tbl_fornecedor', (table) => {
      table.increments('id_fornecedor').primary();
      table.string('nome', 50);
      table.integer('idade');
      table.string('email', 100);
      table.string('telefone', 20);
      table.string('cnpj', 20);
    });
  }

  down() {
    this.drop('tbl_fornecedor');
  }
}
module.exports = NomeDaMigracaoSchema

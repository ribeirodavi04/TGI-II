'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblEscritorioSchema extends Schema {
  up () {
    this.create('tbl_escritorio', (table) => {
      table.increments('id_escritorio').primary();
      table.string('nome', 50); 
      table.string('tipo', 50); 
      table.string('endereco', 100); 
      table.string('telefone', 20); 
      table.string('email', 100); 
      table.string('cpf_cnpj', 50); 
      table.timestamps(true, true);
    })
  }

  down () {
    this.drop('tbl_escritorio')
  }
}

module.exports = TblEscritorioSchema

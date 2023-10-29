'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblProjetoSchema extends Schema {
  up () {
    this.create('tbl_projeto', (table) => {
      table.increments('id_projeto').primary();
      table.integer('id_cliente').unsigned().references('id_cliente').inTable('tbl_cliente');
      table.integer('id_usuario_responsavel').unsigned().references('id_usuario').inTable('tbl_usuario');
      table.string('nome', 100).notNullable();
      table.string('endereco', 150);
      table.string('tipo', 50);
      table.string('descricao', 100);
      table.date('data_inicio');
      table.date('data_final');
      table.timestamps(true, true)
    })
  }

  down () {
    this.drop('tbl_projeto')
  }
}

module.exports = TblProjetoSchema

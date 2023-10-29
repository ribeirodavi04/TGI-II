'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblImagemProjetoSchema extends Schema {
  up () {
    this.create('tbl_imagem_projeto', (table) => {
      table.increments('id_imagem_projeto');
      table
        .integer('id_projeto')
        .unsigned()
        .references('id_projeto')
        .inTable('tbl_projeto')
        .onDelete('CASCADE');
      table.string('nome', 100).notNullable();
      table.string('tipo', 50).notNullable();
      table.text('observacoes');
      table.timestamps(true, true);
    })
  }

  down () {
    this.drop('tbl_imagem_projeto')
  }
}

module.exports = TblImagemProjetoSchema

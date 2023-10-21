'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblEtapaProjetoSchema extends Schema {
  up () {
    this.create('tbl_etapa_projeto', (table) => {
      table.increments('id_etapa_projeto').primary();
      table.integer('id_projeto').unsigned().references('id_projeto').inTable('tbl_projeto');
      table.string('nome', 100).notNullable();
      table.string('status', 100);
      table.string('observacao', 100);
      table.date('data_inicio').notNullable();
      table.date('data_final').notNullable();
      table.timestamps(true, true)
    })
  }

  down () {
    this.drop('tbl_etapa_projeto')
  }
}

module.exports = TblEtapaProjetoSchema

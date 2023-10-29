'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblDocumentoProjetoSchema extends Schema {
  up() {
    this.create('tbl_documento_projeto', (table) => {
      table.increments('id_documento_projeto')
      table
        .integer('id_projeto')
        .unsigned()
        .references('id_projeto')
        .inTable('tbl_projeto')
        .onDelete('CASCADE')
      table.string('nome', 100).notNullable()
      table.string('tipo', 50).notNullable()
      table.text('observacoes')
      table.timestamps()
    })
  }

  down() {
    this.drop('tbl_documento_projeto')
  }
}

module.exports = TblDocumentoProjetoSchema

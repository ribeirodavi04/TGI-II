'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddUrlToDocumentoProjetoSchema extends Schema {
  up () {
    this.table('tbl_documento_projeto', (table) => {
      table.string('url', 255)  // Defina a coluna 'url' com o tipo e tamanho apropriados
    })
  }

  down () {
    this.table('tbl_documento_projeto', (table) => {
      table.dropColumn('url')  // Reverta a adição da coluna 'url'
    })
  }
}

module.exports = AddUrlToDocumentoProjetoSchema

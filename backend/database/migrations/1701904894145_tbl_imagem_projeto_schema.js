'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblImagemProjetoSchema extends Schema {
  up () {
    this.table('tbl_imagem_projeto', (table) => {
      // Adiciona a nova coluna 'id_etapa_projeto'
      table.integer('id_etapa_projeto').unsigned().references('id_etapa_projeto').inTable('tbl_etapa_projeto');
    });
  }

  down () {
    this.table('tbl_imagem_projeto', (table) => {
      // Desfaz a adição da coluna 'id_etapa_projeto'
      table.dropColumn('id_etapa_projeto');
    });
  }
}

module.exports = TblImagemProjetoSchema

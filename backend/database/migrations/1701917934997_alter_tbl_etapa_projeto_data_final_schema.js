'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterTblEtapaProjetoDataFinalSchema extends Schema {
  up () {
    this.table('tbl_etapa_projeto', (table) => {
      // Permite valores nulos na coluna data_final
      table.date('data_final').nullable().alter();
    })
  }

  down () {
    this.table('tbl_etapa_projeto', (table) => {
      // Reverte para a configuração original se necessário
      table.date('data_final').notNullable().alter();
    })
  }
}

module.exports = AlterTblEtapaProjetoDataFinalSchema

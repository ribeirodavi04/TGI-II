'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblOrcamentoProjetoSchema extends Schema {
  up() {
    this.create('tbl_orcamento_projeto', (table) => {
      table.increments('id_orcamento_projeto');
      table.integer('id_projeto').unsigned().references('id_projeto').inTable('tbl_projeto').onDelete('CASCADE');
      table.string('nome', 100).notNullable();
      table.decimal('valor', 12, 2).notNullable();
      table.decimal('porcentagem_desconto', 12, 2).notNullable();
      table.text('observacoes');
      table.timestamps(true, true);
    })
  }

  down() {
    this.drop('tbl_orcamento_projeto')
  }
}

module.exports = TblOrcamentoProjetoSchema

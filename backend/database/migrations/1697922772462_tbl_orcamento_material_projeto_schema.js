'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblOrcamentoMaterialProjetoSchema extends Schema {
  up() {
    this.create('tbl_orcamento_material_projeto', (table) => {
      table.increments('id_orcamento_material_projeto').primary();
      table.integer('id_projeto').unsigned().references('id_projeto').inTable('tbl_projeto');
      table.integer('id_material').unsigned().references('id_material').inTable('tbl_material');
      table.integer('quantidade').notNullable();
      table.float('porcentagem_desconto').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('tbl_orcamento_material_projeto');
  }
}

module.exports = TblOrcamentoMaterialProjetoSchema

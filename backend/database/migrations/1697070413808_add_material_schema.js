'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddMaterialSchema extends Schema {
  up () {
    this.create('tbl_materials', (table) => {
      table.increments('id_material').primary();
      table.integer('id_fornecedor').unsigned().references('id_fornecedor').inTable('tbl_fornecedor'); //vou pegar da tbl fornecedor
      table.string('nome'); //varchar
      table.string('tipo'); //varchar
      table.string('descricao'); //varchar
      table.decimal('preco_unitario', 8, 2 ); //float
      table.timestamps(true, true);
    })
  }

  down () {
    this.drop('tbl_materials')
  }
}

module.exports = AddMaterialSchema

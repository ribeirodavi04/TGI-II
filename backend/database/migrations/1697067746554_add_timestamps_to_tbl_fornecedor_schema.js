'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddTimestampsToTblFornecedorSchema extends Schema {
  up() {
    this.table('tbl_fornecedor', (table) => {
      table.timestamps();
    });
  }

  down() {
    this.table('tbl_fornecedor', (table) => {
      table.dropTimestamps();
    });
  }
}

module.exports = AddTimestampsToTblFornecedorSchema;

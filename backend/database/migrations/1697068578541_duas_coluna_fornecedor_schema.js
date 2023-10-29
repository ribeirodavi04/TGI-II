'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
'use strict';

const Schema = use('Schema');

class DuasColunaFornecedorSchema extends Schema {
  up() {
    this.table('tbl_fornecedor', (table) => {
      table.string('endereco'); // Adicione a coluna "endereco"
      table.text('observacoes'); // Adicione a coluna "observacoes"
    });
  }

  down() {
    this.table('tbl_fornecedor', (table) => {
      table.dropColumn('endereco'); // Remova a coluna "endereco" se necessário
      table.dropColumn('observacoes'); // Remova a coluna "observacoes" se necessário
    });
  }
}

module.exports = DuasColunaFornecedorSchema

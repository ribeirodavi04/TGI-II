'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblPermissaoUsuarioSchema extends Schema {
  up () {
    this.create('tbl_permissao_usuario', (table) => {
      table.increments('id_permissao_usuario').primary();
      table.string('descricao', 100); 
      table.timestamps(true, true)
    })
  }

  down () {
    this.drop('tbl_permissao_usuario')
  }
}

module.exports = TblPermissaoUsuarioSchema

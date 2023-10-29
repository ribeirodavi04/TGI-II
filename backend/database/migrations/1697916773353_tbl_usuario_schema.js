'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblUsuarioSchema extends Schema {
  up () {
    this.create('tbl_usuario', (table) => {
      table.increments('id_usuario');
      table.integer('id_escritorio').unsigned().references('id_escritorio').inTable('tbl_escritorio').notNullable();
      table.integer('id_permissao_usuario').unsigned().references('id_permissao_usuario').inTable('tbl_permissao_usuario').notNullable();
      table.string('nome', 50).notNullable();
      table.string('nome_usuario', 50).notNullable().unique();
      table.string('email', 100).notNullable().unique();
      table.string('senha', 100).notNullable();
      table.string('telefone', 50);
      table.string('cpf', 50);
      table.date('data_nascimento', 50).notNullable();
      table.string('genero', 50).notNullable();
      table.string('endereco', 50).notNullable();
      table.string('imagem'); 
      table.timestamps(true, true)
    })
  }

  down () {
    this.drop('tbl_usuario')
  }
}

module.exports = TblUsuarioSchema

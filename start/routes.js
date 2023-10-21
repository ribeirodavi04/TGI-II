'use strict'


/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Database = use('Database')

Route.group(()=>{
    Route.resource('/fornecedor', 'FornecedorController').apiOnly();
    Route.resource('/cliente', 'ClienteController').apiOnly();
    Route.resource('/material', 'MaterialController').apiOnly();
    Route.resource('/escritorio', 'EscritorioController').apiOnly();
    Route.resource('/permissao', 'PermissaoUsuarioController').apiOnly();
    Route.resource('/usuario', 'UsuarioController').apiOnly();
    Route.resource('/projeto', 'ProjetoController').apiOnly();
    Route.resource('/etapaProjeto', 'EtapaProjetoController').apiOnly();
    Route.resource('/orcamentoMaterialProjeto', 'OrcamentoMaterialProjetoController').apiOnly();
    Route.resource('/orcamentoProjeto', 'OrcamentoProjetoController').apiOnly();
    Route.resource('/imagemProjeto', 'ImagemProjetoController').apiOnly();
    Route.resource('/documentoProjeto', 'DocumentoProjetoController').apiOnly();
}).prefix('/api');



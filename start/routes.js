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
//Fornecedores
Route.group(()=>{
    Route.resource('/fornecedor', 'FornecedorController').apiOnly();
    Route.resource('/cliente', 'ClienteController').apiOnly();
}).prefix('/api');
//Materiais
Route.group(()=>{
    Route.get('/material', 'MaterialController.index');
    Route.get('/material/:id', 'MaterialController.show');
    Route.post('/material', 'MaterialController.store');
    Route.put('/material/:id', 'MaterialController.update');
    Route.delete('/material/:id', 'MaterialController.destroy');
}).prefix('/api');




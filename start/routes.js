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
    Route.get('/fornecedor', 'FornecedorController.index');
    Route.get('/fornecedor/:id', 'FornecedorController.show');
    Route.post('/fornecedor', 'FornecedorController.store');
    Route.put('/fornecedor/:id', 'FornecedorController.update');
    Route.delete('/fornecedor/:id', 'FornecedorController.destroy');
}).prefix('/api');




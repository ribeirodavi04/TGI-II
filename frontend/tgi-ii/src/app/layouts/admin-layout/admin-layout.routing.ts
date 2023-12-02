import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { FornecedorComponent } from '../../pages/fornecedor/fornecedor.component';
import { ClienteComponent } from '../../pages/cliente/cliente.component';
import { MaterialComponent } from 'app/pages/material/material.component';
import { ProjetoComponent } from 'app/pages/projeto/projeto.component';
import { ProjetoDatlhesComponent } from 'app/pages/projeto-datlhes/projeto-datlhes.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',                component: DashboardComponent },
    { path: 'fornecedor',               component: FornecedorComponent },
    { path: 'user',                     component: UserComponent },
    { path: 'cliente',                  component: ClienteComponent},
    { path: 'material',                 component: MaterialComponent},
    { path: 'projeto',                  component: ProjetoComponent},
    { path: 'projeto-detalhes/:id',     component: ProjetoDatlhesComponent}
];

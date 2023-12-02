import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';


import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { FornecedorComponent }      from '../../pages/fornecedor/fornecedor.component';
import { ClienteComponent }         from 'app/pages/cliente/cliente.component';
import { MaterialComponent }        from 'app/pages/material/material.component';
import { ProjetoComponent }         from 'app/pages/projeto/projeto.component';
import { ProjetoDatlhesComponent }  from 'app/pages/projeto-datlhes/projeto-datlhes.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { NgxMaskModule } from 'ngx-mask';
registerLocaleData(ptBr);

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgxMaskModule.forRoot(),
    FormsModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    FornecedorComponent,
    ClienteComponent,
    MaterialComponent,
    ProjetoComponent,
    ProjetoDatlhesComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]
})

export class AdminLayoutModule {}

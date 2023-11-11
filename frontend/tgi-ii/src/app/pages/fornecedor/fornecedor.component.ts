import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'app/models/Fornecedor.model';
import { FornecedorService } from 'app/services/fornecedor.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FornecedorFormularioComponent } from 'app/components/forms/fornecedor-formulario/fornecedor-formulario.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css'],
  moduleId: module.id
})


export class FornecedorComponent implements OnInit {

  fornecedorList$ = new Observable<Fornecedor[]>();

  constructor(
    private fornecedorService: FornecedorService,
    private modalService : NgbModal) { 

    this.getFornecedores();
  }

  ngOnInit(): void {
    
  }

  getFornecedores() {
    this.fornecedorList$ = this.fornecedorService.getFornecedores();
  }
  
  openModalFornecedor(fornecedor?: Fornecedor) {
    const modalRef  = this.modalService.open(FornecedorFormularioComponent);
    if(fornecedor) {
      modalRef.componentInstance.fornecedor = fornecedor;
      modalRef.componentInstance.modoEdicao = true;
    }
  }

}

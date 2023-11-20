import { Component, OnInit } from '@angular/core';
import { Cliente } from 'app/models/Cliente.model';
import { ClienteService } from 'app/services/cliente/cliente.service';
import { ClienteFormularioComponent } from 'app/components/forms/cliente-formulario/cliente-formulario.component';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  moduleId: module.id
})

export class ClienteComponent implements OnInit {

  clienteList$ = new Observable<Cliente[]>();

  currentPage = 1;
  itemsPerPage = 10; 

  constructor(
    private clienteService: ClienteService,
    private modalService: NgbModal) {
      this.getClientes();
  }

  ngOnInit(): void {
  }

  getClientes() {
    this.clienteList$ = this.clienteService.getClientes();
  }

  openModalCliente(cliente?: Cliente) {
    const modalRef = this.modalService.open(ClienteFormularioComponent);
    if(cliente) {
      modalRef.componentInstance.cliente = cliente;
      modalRef.componentInstance.modalEdicao = true;
    }
  }
}

import { Component, OnInit, inject, TemplateRef } from '@angular/core';
import { Cliente } from 'app/models/Cliente.model';
import { ClienteService } from 'app/services/cliente/cliente.service';
import { Observable } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  moduleId: module.id
})

export class ClienteComponent implements OnInit {

  clienteList$ = new Observable<Cliente[]>();
  cliente: Cliente = {
    id_cliente: 0,
    nome: '',
    cpf_cnpj: '', 
    email: '',
    endereco: '',
    telefone: '',
    observacoes: ''
  }
  currentPage = 1;
  itemsPerPage = 10; 
	closeResult = '';
  modoEdicao = false;

  private modalService = inject(NgbModal);

  constructor(private clienteService: ClienteService) {
      this.getClientes();
  }

  ngOnInit(): void {
  }

  getClientes() {
    this.clienteList$ = this.clienteService.getClientes();
  }

  salvarCliente() {
    if (this.modoEdicao) {
      this.clienteService.updateCliente(this.cliente).subscribe({
        next: (response) => {
          this.getClientes();
          this.modalService.dismissAll();
        },
        error: (error) => {
          console.error('Erro ao editar cliente', error);
        }
      });
    } else {
      this.clienteService.addCliente(this.cliente).subscribe({
        next: (response) => {
          this.getClientes();
          this.modalService.dismissAll();
        },
        error: (error) => {
          console.error('Erro ao criar cliente', error);
        }
      });
    }
  }
  
	open(content: TemplateRef<any>, cliente?: Cliente) {
    this.modoEdicao = !!cliente;
    if(this.modoEdicao){
      this.cliente = { ...cliente };
    }else{
      this.cliente = {
        id_cliente: 0,
        nome: '',
        cpf_cnpj: '',
        email: '',
        endereco: '',
        telefone: '',
        observacoes: ''
      };
    }

		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  openModalExclusao(contentExclusao: TemplateRef<any>, cliente: Cliente) {
    this.cliente = { ...cliente };
		this.modalService.open(contentExclusao, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
        this.clienteService.deleteCliente(cliente.id_cliente).subscribe(_=> this.getClientes());
				this.closeResult = `Closed with: ${result}`;        
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}

 
}

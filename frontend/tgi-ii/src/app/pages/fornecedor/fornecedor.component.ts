import { Component, OnInit, inject, TemplateRef } from '@angular/core';
import { Fornecedor } from 'app/models/Fornecedor.model';
import { FornecedorService } from 'app/services/fornecedor.service';
import { Observable } from 'rxjs';
import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css'],
  moduleId: module.id
})

export class FornecedorComponent implements OnInit {

  fornecedorList$ = new Observable<Fornecedor[]>();

  fornecedor: Fornecedor = {
    id_fornecedor: 0,
    nome: '',
    email: '',
    telefone: '',
    cnpj: '',
    created_at: null,
    updated_at: null,
    endereco: '',
    observacoes: ''
  }
  currentPage = 1;
  itemsPerPage = 10;
  closeResult = '';
  modoEdicao = false;

  private modalService = inject(NgbModal);

  constructor(
    private fornecedorService: FornecedorService) { 
    this.getFornecedores();
  }

  ngOnInit(): void {  
  }

  getFornecedores() {
    this.fornecedorList$ = this.fornecedorService.getFornecedores();
  }

  salvarFornecedor() {
    if (this.modoEdicao) {
      this.fornecedorService.updateFornecedor(this.fornecedor).subscribe({
        next: (response) => {
          this.getFornecedores();
          this.modalService.dismissAll();
        },
        error: (error) => {
          console.error('Erro ao editar fornecedor', error);
        }
      });
    } else {
      this.fornecedorService.addFornecedor(this.fornecedor).subscribe({
        next: (response) => {
          this.getFornecedores();
          this.modalService.dismissAll();
        },
        error: (error) => {
          console.error('Erro ao criar fornecedor', error);
        }
      });
    }
  }
  
	open(content: TemplateRef<any>, fornecedor?: Fornecedor) {
    this.modoEdicao = !!fornecedor;
    if(this.modoEdicao){
      this.fornecedor = { ...fornecedor };
    }else{
      this.fornecedor = {
        id_fornecedor: 0,
        nome: '',
        email: '',
        telefone: '',
        created_at: null,
        updated_at: null,
        cnpj: '',
        endereco: '',
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

  openModalExclusao(contentExclusao: TemplateRef<any>, fornecedor: Fornecedor) {
    this.fornecedor = { ...fornecedor };
		this.modalService.open(contentExclusao, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
        this.fornecedorService.deleteFornecedor(fornecedor.id_fornecedor).subscribe(_=> this.getFornecedores());
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

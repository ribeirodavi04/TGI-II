import { Component, OnInit, inject, TemplateRef } from '@angular/core';
import { Material } from 'app/models/Material.model';
import { MaterialService } from 'app/services/material/material.service';
import { Fornecedor } from 'app/models/Fornecedor.model';
import { FornecedorService } from 'app/services/fornecedor.service';
import { Observable } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
  moduleId: module.id
})
export class MaterialComponent implements OnInit {

  materialList$ = new Observable<Material[]>();
  fornecedores: Fornecedor[] = [];
  material: Material = {
    id_material: 0,
    id_fornecedor: 0,
    nome: '', 
    tipo: '', 
    descricao: '', 
    preco_unitario: 0,
    created_at: null,
    updated_at: null
  }
  currentPage = 1;
  itemsPerPage = 10;
  closeResult = '';
  modoEdicao = false;

  private modalService = inject(NgbModal);
  
  constructor(
    private fornecedorService: FornecedorService,
    private materialService: MaterialService
  ) { 
    this.getMateriais();
    this.getFornecedores();
  }

  ngOnInit(): void {
  }

  getMateriais() {
    this.materialList$ = this.materialService.getMateriais();
  }

  getFornecedores() {
    this.fornecedorService.getFornecedores()
      .subscribe(
        (data: Fornecedor[]) => {
          this.fornecedores = data;
        },
        (error) => {
          console.error('Erro ao obter fornecedores:', error);
        }
      );
  }


  salvarMaterial() {
    if (this.modoEdicao) {
      this.materialService.updateMaterial(this.material).subscribe({
        next: (response) => {
          this.getMateriais();
          this.modalService.dismissAll();
        },
        error: (error) => {
          console.error('Erro ao editar fornecedor', error);
        }
      });
    } else {
      this.materialService.addMaterial(this.material).subscribe({
        next: (response) => {
          this.getMateriais();
          this.modalService.dismissAll();
        },
        error: (error) => {
          console.error('Erro ao criar fornecedor', error);
        }
      });
    }
  }

  open(content: TemplateRef<any>, material?: Material) {
    this.modoEdicao = !!material;
    if(this.modoEdicao){
      this.material = { ...material };
    }else{
      this.material = {
        id_material: 0,
        id_fornecedor: 0,
        nome: '', 
        tipo: '', 
        descricao: '', 
        preco_unitario: 0,
        created_at: null,
        updated_at: null
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

  openModalExclusao(contentExclusao: TemplateRef<any>, material: Material) {
    this.material = { ...material };
		this.modalService.open(contentExclusao, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
        this.materialService.deleteMaterial(material.id_material).subscribe(_=> this.getMateriais());
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

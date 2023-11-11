import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'app/models/Fornecedor.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FornecedorService } from 'app/services/fornecedor.service';
import { response } from 'express';

@Component({
  selector: 'fornecedor-formulario',
  templateUrl: './fornecedor-formulario.component.html',
  styleUrls: ['./fornecedor-formulario.component.css'],
  moduleId: module.id
})

export class FornecedorFormularioComponent implements OnInit {

  modoEdicao: boolean = false;
  fornecedor: Fornecedor = {
    id_fornecedor: 0,
    nome: '',
    email: '',
    telefone: '',
    cnpj: '',
    created_at: new Date(),
    updated_at: new Date(),
    endereco: '',
    observacoes: ''
  }
  
  constructor(
    public activeModal: NgbActiveModal,
    private fornecedorService: FornecedorService
  ) {

  }

  ngOnInit(): void {
  }

  salvarFornecedor() {
    if (this.modoEdicao) {
      this.fornecedorService.updateFornecedor(this.fornecedor).subscribe(
        (response) => {
          this.activeModal.close('Fornecedor atualizado com sucesso');
        },
        (error) => {
          console.error('Erro ao atualizar fornecedor', error);
        }
      )
    } else {
      this.fornecedorService.addFornecedor(this.fornecedor).subscribe(
        (response) => {
          this.activeModal.close('Fornecedor cadastrado com sucesso')
        },
        (error) => {
          console.error('Erro ao criar fornecedor', error)
        }
      )
    }

    this.activeModal.close('Operação concluída');
  }

  close() {
    this.activeModal.close('Modal fechado');
  }
}

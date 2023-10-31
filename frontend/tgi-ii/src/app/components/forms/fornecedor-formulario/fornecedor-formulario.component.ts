import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'app/models/Fornecedor.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fornecedor-formulario',
  templateUrl: './fornecedor-formulario.component.html',
  styleUrls: ['./fornecedor-formulario.component.css'],
  moduleId: module.id
})

export class FornecedorFormularioComponent implements OnInit {

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
  };

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close() {
    this.activeModal.close('Modal fechado');
  }
}

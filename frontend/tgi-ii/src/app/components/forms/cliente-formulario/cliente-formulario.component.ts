import { Component, OnInit } from '@angular/core';
import { Cliente } from 'app/models/Cliente.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'app/services/cliente/cliente.service';

@Component({
  selector: 'cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.css'],
  moduleId: module.id
})

export class ClienteFormularioComponent implements OnInit {

  modoEdicao: boolean = false;
  cliente: Cliente = {
    id_cliente: 0,
    nome: '',
    cpf_cnpj: '', 
    email: '',
    endereco: '',
    telefone: '',
    observacoes: ''
  }


  constructor(
    public activeModal: NgbActiveModal,
    private clienteService: ClienteService
  ) { 

  }

  ngOnInit(): void {
  }

  salvarCliente() {
    if (this.modoEdicao) {
      this.clienteService.updateCliente(this.cliente).subscribe({
        next: (response) => {
          this.activeModal.close('Cliente atualizado com sucesso');
        },
        error: (error) => {
          console.error('Erro ao atualizar fornecedor', error);
        }
      });
    } else {
      this.clienteService.addCliente(this.cliente).subscribe({
        next: (response) => {
          this.activeModal.close('Cliente cadastrado com sucesso')
        },
        error: (error) => {
          console.error('Erro ao criar cliente', error)
        }
      });
    }

    this.activeModal.close('Operação concluída');
  }

  close() {
    this.activeModal.close('Modal fechado');
  }
}

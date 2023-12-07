import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projeto } from 'app/models/Projeto.model';
import { ProjetoService } from 'app/services/projeto/projeto.service';
import { Observable } from 'rxjs';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { EtapaProjeto } from 'app/models/EtapaProjeto';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EtapaProjetoService } from 'app/services/etapaProjeto/etapa-projeto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'projeto-datlhes',
  templateUrl: './projeto-datlhes.component.html',
  styleUrls: ['./projeto-datlhes.component.css'],
  moduleId: module.id
})
export class ProjetoDatlhesComponent implements OnInit {

  projetoId: number;
  projeto: Projeto;
  active = 1;
  orcamentoMateriais: number = 0;
  orcamentoGerais: number = 0;
  closeResult = '';
  etapaProjeto: EtapaProjeto;

  constructor(private route: ActivatedRoute,
    private projetoService: ProjetoService,
    private modalService: NgbModal,
    private etapaProjetoService: EtapaProjetoService) {


  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projetoId = +params['id'];
    })

    this.getProjeto();

    this.etapaProjeto = {
      id_etapa_projeto: 0,
      id_projeto: this.projetoId,
      nome: '',
      status: '',
      observacao: '',
      data_inicio: new Date(),
      data_final: new Date(null),
    };
  }

  getProjeto() {
    this.projetoService.getProjeto(this.projetoId).subscribe(
      (projeto) => {
        this.projeto = projeto;
        this.calcOrcamentoMateriais();
        this.calcOrcamentoGerais();
      },
      (error) => {
        console.error('Erro ao carregar detalhes do projeto', error);
      }
    );
  }

  calcOrcamentoMateriais() {
    if (this.projeto && this.projeto.orcamentoMateriaisProjeto) {
      this.orcamentoMateriais = this.projeto.orcamentoMateriaisProjeto.reduce(
        (total, material) =>
          total +
          material.quantidade * material.material.preco_unitario * (1 - material.porcentagem_desconto / 100),
        0
      );
    }
  }

  calcOrcamentoGerais() {
    if (this.projeto && this.projeto.orcamentosProjeto) {
      this.orcamentoGerais = this.projeto.orcamentosProjeto.reduce(
        (total, orcamento) => total + orcamento.valor * (1 - orcamento.porcentagem_desconto / 100), 0
      )
    }
  }

  salvarEtapa() {
    console.log(this.etapaProjeto)
    alert('cu');
    this.etapaProjetoService.addEtapaProjeto(this.etapaProjeto).subscribe({
      next: () => {
        this.getProjeto();
        this.modalService.dismissAll();
      },
      error: (error) => {
        console.error('Erro ao criar etapa', error);
      }
    });
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
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



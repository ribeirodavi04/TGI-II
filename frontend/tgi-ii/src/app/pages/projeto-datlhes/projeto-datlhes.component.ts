import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projeto } from 'app/models/Projeto.model';
import { ProjetoService } from 'app/services/projeto/projeto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'projeto-datlhes',
  templateUrl: './projeto-datlhes.component.html',
  styleUrls: ['./projeto-datlhes.component.css'],
  moduleId: module.id
})
export class ProjetoDatlhesComponent implements OnInit {

  projetoId: number;
  projeto: Projeto;

  constructor(private route: ActivatedRoute, private projetoService: ProjetoService) { 
    this.getProjeto();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projetoId = +params['id'];
    })
  }

  getProjeto(){
    this.projetoService.getProjeto(this.projetoId).subscribe(
      (projeto) => {
        this.projeto = projeto;
      },
      (error) => {
        console.error('Erro ao carregar detalhes do projeto', error);
      }
    );
  }

}

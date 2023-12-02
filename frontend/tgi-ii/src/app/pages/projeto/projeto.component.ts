import { Component, OnInit } from '@angular/core';
import { Projeto } from 'app/models/Projeto.model';
import { ProjetoService } from 'app/services/projeto/projeto.service';
import { Observable } from 'rxjs';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css'],
  moduleId: module.id
})
export class ProjetoComponent implements OnInit {

  projetoList$ = new Observable<Projeto[]>();
  currentPage = 1;
  itemsPerPage = 10; 

  constructor(private projetoService: ProjetoService, private router: Router) {
    this.getProjetos();
  }

  ngOnInit(): void {
  }

  getProjetos() {
    this.projetoList$ = this.projetoService.getProjetos();
  }

  abrirDetalhes(projetoId: number) {
    this.router.navigate(['/projeto-detalhes', projetoId])
  }

}

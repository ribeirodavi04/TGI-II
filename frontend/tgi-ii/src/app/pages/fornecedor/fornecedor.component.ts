import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'app/models/Fornecedor.model';
import { FornecedorService } from 'app/services/fornecedor.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})


export class FornecedorComponent implements OnInit {

  fornecedorList$ = new Observable<Fornecedor[]>();

  constructor(private fornecedorService: FornecedorService) { 
    this.getFornecedores();
  }

  ngOnInit(): void {
    
  }

  getFornecedores() {
    this.fornecedorList$ = this.fornecedorService.getFornecedores();
  }
}

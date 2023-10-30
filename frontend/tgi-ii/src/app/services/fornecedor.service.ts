import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fornecedor } from 'app/models/Fornecedor.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FornecedorService {

  private apiUrl = environment.api_URL + 'Fornecedor';

  constructor( private httpClient: HttpClient) { }

  getFornecedores() {
    return this.httpClient.get<Fornecedor[]>(this.apiUrl);
  }
}

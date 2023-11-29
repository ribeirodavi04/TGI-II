import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fornecedor } from 'app/models/Fornecedor.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FornecedorService {

  private apiUrl = environment.api_URL + 'Fornecedor';

  constructor( private httpClient: HttpClient) { }

  getFornecedores() {
    return this.httpClient.get<Fornecedor[]>(this.apiUrl);
  }
  
  getFornecedor(id_fornecedor) {
    return this.httpClient.get<Fornecedor>(`${this.apiUrl}/${id_fornecedor}`)
  }
  
  addFornecedor(fornecedor: Fornecedor){
    return this.httpClient.post<Fornecedor>(this.apiUrl, fornecedor);
  }

  updateFornecedor(fornecedor: Fornecedor) {
    const id_fornecedor = fornecedor.id_fornecedor;
    return this.httpClient.put<Fornecedor>(`${this.apiUrl}/${id_fornecedor}`, fornecedor);  
  }

  deleteFornecedor(id_fornecedor: number) {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id_fornecedor}`);
  }
  
}

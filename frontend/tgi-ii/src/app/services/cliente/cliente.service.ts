import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from 'app/models/Cliente.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = environment.api_URL + 'Cliente';

  constructor( private httpClient: HttpClient) { }

  getClientes() {
    return this.httpClient.get<Cliente[]>(this.apiUrl);
  }

  getCliente(id_cliente) {
    return this.httpClient.get<Cliente>(`${this.apiUrl}/${id_cliente}`)
  }
  
  addCliente(cliente: Cliente){
    return this.httpClient.post<Cliente>(this.apiUrl, cliente);
  }

  updateCliente(cliente: Cliente) {
    const id_cliente = cliente.id_cliente;
    return this.httpClient.put<Cliente>(`${this.apiUrl}/${id_cliente}`, cliente);  
  }

  deleteCliente(id_cliente: number) {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id_cliente}`);
  }
}

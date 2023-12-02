import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projeto } from 'app/models/Projeto.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProjetoService {

  private apiUrl = environment.api_URL + 'Projeto';

  constructor(private httpClient: HttpClient) { }

  getProjetos() {
    return this.httpClient.get<Projeto[]>(this.apiUrl);
  }

  getProjeto(id_projeto) {
    return this.httpClient.get<Projeto>(`${this.apiUrl}/${id_projeto}`);
  }
  
  addProjeto(projeto: Projeto){
    return this.httpClient.post<Projeto>(this.apiUrl, projeto);
  }

  updateProjeto(projeto: Projeto) {
    const id_projeto = projeto.id_projeto;
    return this.httpClient.put<Projeto>(`${this.apiUrl}/${id_projeto}`, projeto);  
  }

  deleteProjeto(id_projeto: number) {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id_projeto}`);
  }
}

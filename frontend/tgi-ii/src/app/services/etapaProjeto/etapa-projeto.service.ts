import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EtapaProjeto } from 'app/models/EtapaProjeto';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtapaProjetoService {

  private apiUrl = environment.api_URL + 'EtapaProjeto';

  constructor(private httpClient: HttpClient) { }

  getEtapasProjeto() {
    return this.httpClient.get<EtapaProjeto[]>(this.apiUrl);
  }

  getEtapaProjeto(id_etapa_projeto) {
    return this.httpClient.get<EtapaProjeto>(`${this.apiUrl}/${id_etapa_projeto}`);
  }

  addEtapaProjeto(etapaProjeto: EtapaProjeto) {
    return this.httpClient.post<EtapaProjeto>(this.apiUrl, etapaProjeto);
  }

  updateEtapaProjeto(etapaProjeto: EtapaProjeto) {
    const id_etapa_projeto = etapaProjeto.id_etapa_projeto;
    return this.httpClient.put<EtapaProjeto>(`${this.apiUrl}/${id_etapa_projeto}`, etapaProjeto);
  }

  deleteEtapaProjeto(id_etapa_projeto: number) {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id_etapa_projeto}`);
  }
}

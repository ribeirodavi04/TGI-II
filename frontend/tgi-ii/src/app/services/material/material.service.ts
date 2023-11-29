import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from 'app/models/Cliente.model';
import { environment } from 'environments/environment';
import { Material } from 'app/models/Material.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private apiUrl = environment.api_URL + 'Material';

  constructor(private httpClient: HttpClient) { }

  getMateriais() {
    return this.httpClient.get<Material[]>(this.apiUrl);
  }

  getMaterial(id_material) {
    return this.httpClient.get<Material>(`${this.apiUrl}/${id_material}`)
  }
  
  addMaterial(material: Material){
    return this.httpClient.post<Material>(this.apiUrl, material);
  }

  updateMaterial(material: Material) {
    const id_cliente = material.id_material;
    return this.httpClient.put<Cliente>(`${this.apiUrl}/${id_cliente}`, material);  
  }

  deleteMaterial(id_material: number) {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id_material}`);
  }
}

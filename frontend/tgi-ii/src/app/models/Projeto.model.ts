import { ImagemProjeto } from "./ImagemProjeto";
import { EtapaProjeto } from "./EtapaProjeto";
import { Cliente } from "./Cliente.model";
import { OrcamentoProjeto } from "./OrcamentoProjeto";
import { OrcamentoMaterialProjeto } from "./OrcamentoMaterialProjeto";

export interface Projeto {
  id_projeto: number;
  id_cliente: number;
  id_usuario_responsavel: number;
  nome: string;
  endereco: string;
  tipo: string;
  descricao: string;
  data_inicio: string; // Certifique-se de que este formato seja adequado ao que você está usando
  data_final: string; // Certifique-se de que este formato seja adequado ao que você está usando
  created_at: string; // Certifique-se de que este formato seja adequado ao que você está usando
  updated_at: string; // Certifique-se de que este formato seja adequado ao que você está usando
  orcamentoMateriaisProjeto: OrcamentoMaterialProjeto[]; // Substitua any pelo tipo apropriado se houver um modelo correspondente
  orcamentosProjeto: OrcamentoProjeto[]; // Substitua any pelo tipo apropriado se houver um modelo correspondente
  //documentosProjeto: DocumentoProjeto[]; // Substitua DocumentoProjeto pelo tipo apropriado
  imagensProjeto: ImagemProjeto[];
  etapasProjeto: EtapaProjeto[]; 
  cliente: Cliente; 
  //usuario: Usuario; // Substitua Usuario pelo tipo apropriado
}
import { Projeto } from "./Projeto.model";

export interface OrcamentoProjeto {
    id_orcamento_projeto: number;
    id_projeto: number;
    nome: string;
    valor: number;
    porcentagem_desconto: number;
    observacoes: string;
    projeto?: Projeto; 
  }
import { Projeto } from "./Projeto.model";

export interface ImagemProjeto {
    id_imagem_projeto: number;
    id_projeto: number;
    nome: string;
    tipo: string;
    observacoes: string | null;
    url: string;
    projeto?: Projeto; 
}
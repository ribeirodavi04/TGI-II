import { Projeto } from "./Projeto.model";

export interface EtapaProjeto {
    id_etapa_projeto: number;
    id_projeto: number;
    nome: string;
    status: string;
    observacao: string;
    data_inicio: Date;
    data_final?: Date;
    projeto?: Projeto;
}
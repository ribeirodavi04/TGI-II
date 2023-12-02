import { Projeto } from "./Projeto.model";
import { Material } from "./Material.model";

export interface OrcamentoMaterialProjeto {
    id_orcamento_material_projeto: number;
    id_projeto: number;
    id_material: number;
    quantidade: number;
    porcentagem_desconto: number;
    projeto?: Projeto;
    material?: Material; 
}
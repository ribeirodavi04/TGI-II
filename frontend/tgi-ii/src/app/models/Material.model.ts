export interface Material {
    id_material: number,
    id_fornecedor: number,
    nome: string, 
    tipo: string, 
    descricao: string, 
    preco_unitario: number,
    created_at: Date,
    updated_at: Date
}
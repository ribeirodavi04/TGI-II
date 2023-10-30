export interface Fornecedor {
    id_fornecedor: number,
    nome: string,
    email: string,
    telefone: string,
    cnpj: string,
    created_at: Date,
    updated_at: Date,
    endereco: string,
    observacoes: string
}
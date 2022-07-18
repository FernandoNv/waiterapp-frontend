export interface Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataCriacao: Date;
    pedidos?: [];
}

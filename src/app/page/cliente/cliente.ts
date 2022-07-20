export interface ICliente {
  id: number;
  nome: string;
  email?: string;
  cpf?: string;
  dataCriacao: Date;
}

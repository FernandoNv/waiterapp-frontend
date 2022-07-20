import { ICliente } from "src/app/page/cliente/cliente";
import { IItemPedido } from "src/app/page/cliente/cliente-fazer-pedido/cliente-fazer-pedido.component";
import { Estado } from "../enum/estado";

export interface IGarcom{
  id: number;
  nome: string;
  cpf: string;
  dataCriacao: Date;
}

export interface IPagamento{
  id: number;
  estadoPagamento: Estado;
  dataPagamento: Date;
  pedido: IPedido;
}

export interface IPedido{
  id?: number;
  dataCriacao?: Date;
  estado?: Estado;
  precoTotal?: number
  notaAtendimento?: number;
  notaPedido?: number;
  opcoesExtras?: string;
  items: IItemPedido[];
  cliente: ICliente;
  garcom?: IGarcom;
  pagamento?: IPagamento;
}
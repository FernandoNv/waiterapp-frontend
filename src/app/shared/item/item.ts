export interface IItem {
  id: number;
  nome: string;
  descricao: string;
  dataCriacao: Date;
  preco: number;
};

export interface IIngrediente{
  id: number;
  nome: string;
  descricao: string;
  dataCriacao: Date;
  caloria: number
}

export interface IPrato extends IItem{
  ingredientes: IIngrediente[];
  caloriaTotal: number;
}

export interface IBebida extends IItem{
  quantidade: string;
}

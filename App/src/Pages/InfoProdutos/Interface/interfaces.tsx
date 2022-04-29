export interface ProdutoRouteParams {
  id: number
}

export type Usuario = {
  id: number;
  nome: string;
  email: string;
}

export type Images = {
  id: number;
  url: string;
}

export interface Produto {
  id: number,
  codigo: number,
  descricao: string,
  embalagem: string,
  codigo_de_barras: string,
  quantidade: number,
  images: {
    id: number;
    url: string;
  }
}

export interface Historico {
  id: number,
  users_id: number,
  produto_id: number,
  descricao: string,
  embalagem: string,
  data: string,
  hora: string,
  soma: string,
  quantidade: number,
  responsavel: string,
  update: string,
}

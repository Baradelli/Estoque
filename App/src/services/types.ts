export type Images = {
    id: number;
    url: string;
}

export type Produtos = {
    id: number;
    users_id: number;
    codigo: number;
    descricao: string;
    embalagem: string;
    codigo_de_barras: string;
    quantidade: number;
    images: Images[];
}

export type UpdateProduto = {
    codigo?: number;
    descricao?: string;
    quantidade?: number;
    embalagem?: string;
    codigo_de_barras?: string;
}

export type PathUrl = {
    path: string
}

export type Historico = {
    id: number;
    users_id: number;
    produto_id: number;
    descricao: string;
    embalagem: string;
    data: string;
    hora: string;
    soma: string;
    quantidade: number;
    responsavel: string;
    update: string;
}

export type Params = {
    id: number;
}

export type RouteParams = {
    key: string;
    name: string;
    params?: Params | undefined;
    path: string | undefined;
}
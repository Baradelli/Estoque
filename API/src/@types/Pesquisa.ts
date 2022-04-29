export interface PesquisaQuery {
    [key: string]: 'ASC' | 'DESC' | string | string[] | PesquisaQuery | PesquisaQuery[]
}

export interface Pesquisa {
    value: string;
}
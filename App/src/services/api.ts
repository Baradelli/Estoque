import { AxiosPromise } from 'axios';
import xhr from './xhr';
import { UpdateProduto, PathUrl } from '../services/types';

interface ProdutoRouteParams {
  id: number
}

const login = (params: Object): AxiosPromise<any> =>
  xhr.post('/auth', params);

// Produto

const getEstoque = async (): Promise<any> =>
  xhr.get('/produto');

const getInfoProduto = async (users_id: number, id: number | ProdutoRouteParams): Promise<any> =>
  xhr.get(`produtoId/${users_id}?produto_id=${id}`);

const getPesquisa = async (users_id: number, filtro: string): Promise<any> =>
  xhr.get(`pesquisa/${users_id}?filtro=${filtro}`);

const getUser = async (): Promise<any> => {
  const { data } = await xhr.get('/usuarios');
  return data;
}

const updateProduto = async (users_id: number, produto_id: number, params: UpdateProduto) => 
  xhr.put(`/alterarProduto/${users_id}?produto_id=${produto_id}`, params)

// Historico

const getHistorico = async (users_id: number | string, column: string): Promise<any> => 
  xhr.get(`/historico/${users_id}?column=${column}`);

const getHistoricoId = async (users_id: number, produto_id: number | string):Promise<any> =>
  xhr.get(`/historicoProdutoID/${users_id}?produto_id=${produto_id}`);  

// Image 

const updateImageWithProdutoID = async (produto_id: number, path: FormData) => 
  xhr.put(`/imagesUpdate/${produto_id}`, path);

const teste = async (id: number, path: FormData) => 
  xhr.put(`/updateImage/${id}`, path)

export default {
    login,
    getHistorico,
    getEstoque,
    getInfoProduto,
    getPesquisa,
    getUser,
    getHistoricoId,
    updateProduto,
    updateImageWithProdutoID,
    teste
}

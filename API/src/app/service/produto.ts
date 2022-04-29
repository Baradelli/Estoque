import Produto from '../models/Produtos';
import mapper from '../mapper/produto'
import ExceptionError from '../../utils/exception-error';
import produtoView from '../../views/produtos_view'

export type ObjectGeneric = { [x: string]: string | number | null };

const getProdutos = async (
  users_id: number,
  filtro: string,
): Promise<[Produto[], number]> => {
  const [produtos, totalProdutos] = await mapper.getProdutos(users_id, filtro);

  return [produtos, totalProdutos];
};

const updateProduto = async (
  users_id: number,
  produto_id: number,
  alteracoes: ObjectGeneric,
): Promise<Produto> => {
  await mapper.updateProduto(users_id, produto_id, alteracoes);

  const operacao = await mapper.getProdutoById(users_id, produto_id);

  if (!operacao) {
    throw ExceptionError('Esta operação não existe!', 404);
  }

  return operacao;
};

const getProdutoById = async (
  users_id: number,
  produto_id: number,
) => {
  const produto = await mapper.getProdutoById(users_id, produto_id)

  if (!produto) {
    throw ExceptionError('Poduto não encontrado', 404);
  }

  return produtoView.render(produto);
}

export default {
  getProdutos,
  updateProduto,
  getProdutoById
}

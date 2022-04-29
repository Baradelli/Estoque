import Produto from '../models/Produtos';
import { getManager, getRepository } from 'typeorm';

export type ObjectGeneric = { [x: string]: string | number | null };

const getProdutos = async (
  users_id: number,
  filtro: string | number,
): Promise<[Produto[], number]> => {
  const ProdutoRepository = getRepository(Produto);

  const query = ProdutoRepository
    .createQueryBuilder('produtos')
    .leftJoinAndSelect('produtos.images', 'images')
    .where('users_id = :users_id', { users_id })
    .andWhere('codigo like :value', { value: `%${filtro}%` })
    .orWhere('descricao like :value', { value: `%${filtro}%` })
    .orWhere('embalagem like :value', { value: `%${filtro}%` })
    .orWhere('codigo_de_barras like :value', { value: `%${filtro}%` })

  const [produtos, totalProdutos] = await query.getManyAndCount();

  const produtosFiltrados = produtos.filter(p => Number(p.users_id) === users_id);

  return [produtosFiltrados, totalProdutos];
};

const getProdutoById = async (
  users_id: number,
  produto_id: number,
) => {
  const produtosrepository = getRepository(Produto);

  const produto = await produtosrepository.findOne({
    where: { id: produto_id, users_id },
    relations: ['images'],
  });

  return produto;
}

const updateProduto = async (
  users_id: number,
  produto_id: number,
  alteracoes: ObjectGeneric,
): Promise<void> => getManager()  
  .transaction(async (transaction) => {
    await transaction
      .createQueryBuilder()
      .update(Produto)
      .set(alteracoes)
      .where('users_id = :users_id', { users_id })
      .andWhere('id = :produto_id', { produto_id })      
      .execute();
  });

export default {
  getProdutos,
  updateProduto,
  getProdutoById
}
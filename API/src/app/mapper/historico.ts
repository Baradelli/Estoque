import { getRepository } from "typeorm";
import Historico from "../models/Historico";

const getHistoricoByProdutoId = async (
  users_id: number,
  produto_id: number,
) => {
  const HistoricoRepository = getRepository(Historico);

  const query = HistoricoRepository
      .createQueryBuilder()
      .where('users_id = :users_id', { users_id })
      .andWhere('produto_id = :produto_id', { produto_id })
      .orderBy('id', 'DESC');

  const historico = await query.getMany();

  const count = await query.select('COUNT(id)', 'count').getCount();

  const produtosFiltrados = historico.filter(p => Number(p.users_id) === users_id);

  return [produtosFiltrados, count];
};

const getHistoricoAndOrderByColunm = async (
  users_id: string | number,
  filtro: string,
) => {
  const HistoricoRepository = getRepository(Historico);

  const order = filtro === 'id' || filtro === 'created_at' ? 'DESC' : 'ASC'

  const query = HistoricoRepository
    .createQueryBuilder()
    .where('users_id = :users_id', { users_id })
    .orderBy(filtro, order);

    const historico = await query.getMany();

    const count = await query.select('COUNT(id)', 'count').getCount();

    return [historico, count];
}

export default {
  getHistoricoByProdutoId,
  getHistoricoAndOrderByColunm
}
import mapper from '../mapper/historico'
import Historico from '../models/Historico';

const getHistoricoByProdutoId = async (
  users_id: number,
  produto_id: number,
) => {
  const [historico, count] = await mapper.getHistoricoByProdutoId(users_id, produto_id );

  return [historico, count];
};

const getHistoricoAndOrderByColunm = async (
  users_id: string | number,
  filtro: string,
) => {
  const [historico, count] = await mapper.getHistoricoAndOrderByColunm(users_id, filtro);

  return [historico, count];
};

export default {
  getHistoricoByProdutoId,
  getHistoricoAndOrderByColunm
};
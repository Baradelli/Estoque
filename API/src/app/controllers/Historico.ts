import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Historico from '../models/Historico';
import service from '../service/historico'
import * as Yup from 'yup';

/*  _____________________________________
    | req.params = |  'url/:params'     |
    | req.query =  | 'url/?query&query' |
    | req.body =   | JSON               |
    |______________|____________________|
 */

const getHistoricoByProdutoId = async (req: Request, res: Response) => {
  const {users_id} = req.params;  
  
  const produto_id = req.query.produto_id || undefined;

  const [historico, count] = await service.getHistoricoByProdutoId(Number(users_id), Number(produto_id));

  return res.json({ historico, count });
};

const getHistoricoAndOrderByColunm = async (req: Request, res: Response) => {
  const { users_id } = req.params;
  const filtro = req.query.column || "id";

  const [historico, count] = await service.getHistoricoAndOrderByColunm(users_id, String(filtro))

  return res.json({historico, count});
}; 

const createHist = async (request: Request, response: Response) => {        
  const {
    users_id,
    produto_id,
    descricao,
    embalagem,
    operacao,
    quantidade,
    responsavel,
  } = request.body;

  const historicorepositori = getRepository(Historico);

  const dataH = {
    users_id,
    produto_id,
    descricao,
    embalagem,
    operacao,
    quantidade,
    responsavel,
  };

  const historico = historicorepositori.create(dataH);

  await historicorepositori.save(historico);

  return response.status(201).json(historico);
};

export default {
  getHistoricoAndOrderByColunm,
  createHist,
  getHistoricoByProdutoId
};

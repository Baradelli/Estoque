import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import produtoView from '../../views/produtos_view';
import Produto from '../models/Produtos';
import Historico from '../models/Historico'
import service from '../service/produto'
import * as Yup from 'yup';

/*  _____________________________________
    | req.params = |  'url/:params'     |
    | req.query =  | 'url/?query&query' |
    | req.body =   | JSON               |
    |______________|____________________|
 */

const updateProduto = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { users_id } = req.params;
        
    const { produto_id } = req.query;

    const operacao = await service.updateProduto(Number(users_id), Number(produto_id), req.body);

    return res.json(operacao);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getProdutos = async (req: Request, res: Response): Promise<Response> => {
  const { usersId } = req.params;
  
  const filtro = req.query.filtro || "";

  const [produtos, totalProdutos] = await service.getProdutos(Number(usersId), String(filtro));

  return res.json({ produtos: produtoView.renderMany(produtos), totalProdutos });
};

const getProdutoById = async (req: Request, res: Response) => {
  const { users_id } = req.params;

  const produto_id = req.query.produto_id;

  const produto = await service.getProdutoById(Number(users_id), Number(produto_id))  

  return res.json(produto);
}

const index = async (request: Request, response: Response) => {
  const produtosrepository = getRepository(Produto);

  const produtos = await produtosrepository.find({
    relations: ['images']
  });

  return response.json(produtoView.renderMany(produtos));
};

const indexHist = async (request: Request, response: Response) => {

  const { coluna, ordem } = request.params;

  const historicorepository = getRepository(Historico);

  const columnFilter = coluna || 'id';

  const historico = await historicorepository.find({ order: { [columnFilter]: "DESC" } });

  return response.json(historico);
};

const create = async (req: Request, res: Response) => {
  const {
    users_id,
    codigo,
    descricao,
    embalagem,
    codigo_de_barras,
    quantidade,
  } = req.body;

  const produtosrepository = getRepository(Produto);

  const requestImages = req.files as Express.Multer.File[];
  const image = requestImages.map(image => {
    return { path: image.filename }
  })    

  // const images = !req.files?.length 
  // ? [{ path: 'nada' }] 
  // : image

  const data = {
    users_id,
    codigo,
    descricao,
    embalagem,
    codigo_de_barras,
    quantidade,
    image
  };

  const schema = Yup.object().shape({
    users_id: Yup.number().required(),
    codigo: Yup.number().required(),
    descricao: Yup.string().required().max(60),
    embalagem: Yup.string().required().max(10),
    codigo_de_barras: Yup.string().max(13),
    quantidade: Yup.number(),
    images: Yup.array(
      Yup.object().shape({
        path: Yup.string()
      }))
  });

  await schema.validate(data, {
    abortEarly: false,
  });

  const produto = produtosrepository.create(data);

  await produtosrepository.save(produto)

  return res.status(201).json(produto);
};

const createHist = async (request: Request, response: Response) => {
  const {
    users_id,
    produto_id,
    descricao,
    embalagem,
    data,
    hora,
    soma,
    quantidade,
    responsavel,
    update,
  } = request.body;

  const historicorepositori = getRepository(Historico);

  const dataH = {
    users_id,
    produto_id,
    descricao,
    embalagem,
    data,
    hora,
    soma,
    quantidade,
    responsavel,
    update,
  };

  const schema = Yup.object().shape({
    users_id: Yup.number().required(),
    produto_id: Yup.number().required(),
    descricao: Yup.string().required().max(60),
    embalagem: Yup.string().required().max(10),
    data: Yup.string().required(),
    hora: Yup.string().required(),
    soma: Yup.string().required(),
    quantidade: Yup.number().default(1),
    responsavel: Yup.string().required(),
    update: Yup.string(),
  });

  await schema.validate(dataH, {
    abortEarly: false,
  });

  const historico = historicorepositori.create(dataH);

  await historicorepositori.save(historico);

  return response.status(201).json(historico);
}

export default {
  getProdutos,
  index,
  indexHist,
  create,
  createHist,
  getProdutoById,
  updateProduto
};

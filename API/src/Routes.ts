import { Router } from 'express';
import multer from 'multer';
import authMiddleware from './app/middlewares/authMiddleware';
import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import ProdutoController from './app/controllers/ProdutoController';
import Historico from './app/controllers/Historico';
import Images from './app/controllers/Images';
import uploadConfig from './config/upload';
import validateQuery from './utils/pesquisas';
import { 
  validateGetHistoricoByProdutoId,
  validateGetHistoricoAndOrderByColunm,
  validateCreateHistorico,
  validateUpdateOperacao,
  validateGetProdutos,
  validateGetProdutoById
} from './app/controllers/validate/validates';

const router = Router();
const upload = multer(uploadConfig);

// Usuario
router.post('/auth', AuthController.authenticate);
router.post('/users', UserController.store);
router.get('/users', authMiddleware, UserController.index);
router.post('/usuarios', UserController.list);

// Produtos
router.get('/produto', ProdutoController.index);
router.get('/produtoId/:users_id', /* validateGetProdutoById, */ ProdutoController.getProdutoById);
router.get('/pesquisa/:usersId', /* validateGetProdutos, */ ProdutoController.getProdutos);
router.post('/produto', upload.array('images'), ProdutoController.create);
router.put('/alterarProduto/:users_id', /* validateUpdateOperacao, */ ProdutoController.updateProduto);

// Images 
router.get('/images', Images.getImages);
router.get('/images/:produtos_id', Images.getImageByProdutoID);
router.put('/imagesUpdate/:produtos_id', Images.updateImage);
router.put('/updateImage/:produtos_id', upload.array('images'), Images.updateImage);
router.post('/postImage', Images.postImage)

// Historico
router.post('/historico', /* validateCreateHistorico , */Historico.createHist);
router.get('/historico/:users_id', /* validateGetHistoricoAndOrderByColunm, */ Historico.getHistoricoAndOrderByColunm);
router.get('/historicoProdutoID/:users_id', /* validateGetHistoricoByProdutoId, */ Historico.getHistoricoByProdutoId);

export default router;

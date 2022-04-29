import { Segments, Joi, celebrate } from 'celebrate'

// Validações Historico
export const validateGetHistoricoByProdutoId = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    users_id: Joi.number().required(),
  }),
  [Segments.QUERY]: Joi.object().keys({
    produto_id: Joi.number().required(),
  }),
});

export const validateGetHistoricoAndOrderByColunm = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    users_id: Joi.number().required(),
  }),
});

export const validateCreateHistorico = celebrate({
  [Segments.BODY]: Joi.object().keys({
    users_id: Joi.number().required(),
    produto_id: Joi.number().required(),
    descricao: Joi.string().required(),
    embalagem: Joi.string().required(),
    operacao: Joi.string().required(),
    quantidade: Joi.number().required(),
    responsavel: Joi.string().required(),
  }),
});

// Validações Produtos

export const validateUpdateOperacao = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    users_id: Joi.number().required(),
  }),
  [Segments.QUERY]: Joi.object().keys({
    produto_id: Joi.number().required(),
  }),
});

export const validateGetProdutos = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    usersId: Joi.number().required(),
  }),
});

export const validateGetProdutoById = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    users_id: Joi.number().required(),
  }),
  [Segments.QUERY]: Joi.object().keys({
    produto_id: Joi.number().required(),
  }),
});

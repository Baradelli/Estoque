import * as Yup from 'yup'
import { celebrate, Segments, Joi } from 'celebrate'

const validateQuery = celebrate({
    [Segments.QUERY]: Joi.object().keys({
        codigo: Joi.number().required(),
        descricao: Joi.string().required().max(60),
        embalagem: Joi.string().required().max(10),
        codigo_de_barras: Joi.string().max(13),
        quantidade: Joi.number(),
        images: Joi.array().allow(),
    })
});

export default validateQuery;
import Joi from '@hapi/joi';

export default {
  create: Joi.object().keys({
    service: Joi.string().required(),
    path: Joi.string().required(),
    ip: Joi.string().optional(),
    uniqueid: Joi.string().required(),
    method: Joi.string().required(),
    headers: Joi.string().optional(),
    params: Joi.string().optional(),
    query: Joi.string().optional(),
    body: Joi.string().optional(),
    res_status: Joi.number().optional(),
  }),
};

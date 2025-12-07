import Joi from 'joi';

export const createBlagueSchema = Joi.object({
  question: Joi.string().required().min(3),
  reponse: Joi.string().required(),
});

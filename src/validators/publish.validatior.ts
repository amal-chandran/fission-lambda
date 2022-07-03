import Joi from 'joi';

export const publishSchema = Joi.object({
  name: Joi.string().required().label('--name'),
  cwd: Joi.string().optional().label('--cwd'),
});

// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DadosEstruturais, Condominio } = initSchema(schema);

export {
  DadosEstruturais,
  Condominio
};
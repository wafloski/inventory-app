import knexConfig from '../../../knexfile';
import knex from 'knex';

const env = process.env.NODE_ENV || 'development';

export default knex(knexConfig[env]);

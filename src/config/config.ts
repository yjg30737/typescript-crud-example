import { ConfigDatabase } from '../compiler/types'

import dotenv from 'dotenv';
dotenv.config();

const configDb: ConfigDatabase = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,
    dateStrings: true,
}

export default configDb;


import mysql from 'mysql2/promise';
import configDb from '../config/config';
 
 const dbConfig = {
     host: configDb.host,
     port: Number(configDb.port),
     user: configDb.user,
     password: configDb.password,
     database: configDb.database,
     connectionLimit: 10,
     dateStrings: configDb.dateStrings,
 }

export default mysql.createPool(dbConfig);
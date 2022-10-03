import MybatisMapper from 'mybatis-mapper';
import poolPromise from '../database/db_config';

MybatisMapper.createMapper(['./src/queries/queries.xml']);


async function execQuery(q: string, value?: number | Array<any>) {
    const conn = await poolPromise.getConnection();
    try {
        return await conn.query(q, value);
    } catch (e: any) {
        console.log(e);
        throw new Error(e);
    } finally {
        conn.release();
    }
}

let format: MybatisMapper.Format = {language: 'sql', indent: '  '};

export async function getAll() {
    try {
        let q: string = MybatisMapper.getStatement('Mapper', 'getAll', {}, format);
        return await poolPromise.query(q).then(result => result[0]);
    } catch (e: any) {
        console.log(e);
        throw new Error(e);
    }
}

export async function getById(param: MybatisMapper.Params) {
    try {
        let q: string = MybatisMapper.getStatement('Mapper', 'getById', param, format);
        return await poolPromise.query(q).then(result => result[0]);
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function create(param: MybatisMapper.Params) {
    try {
        let q: string = MybatisMapper.getStatement('Mapper', 'create', param, format);
        return await poolPromise.query(q).then(result => result[0]);
    } catch (e: any) {
        console.log(e);
        throw new Error(e);
    }
}

export async function update(param: MybatisMapper.Params) {
    try {
        let q: string = MybatisMapper.getStatement('Mapper', 'update', param, format);
        return await poolPromise.query(q).then(result => result[0]);
    } catch (e: any) {
        console.log(e);
        throw new Error(e);
    }
}

export async function remove(param: MybatisMapper.Params) {
    try {
        let q: string = MybatisMapper.getStatement('Mapper', 'remove', param, format);
        return await poolPromise.query(q).then(result => result[0]);
    } catch (e: any) {
        console.log(e);
        throw new Error(e);
    }
}
import MybatisMapper from 'mybatis-mapper';
import { Request, Response } from "express";
import * as service from '../services/service';

export async function getAll(req: Request, res: Response): Promise<void> {
    try {
        let result = await service.getAll();
        res.status(200).send(result);
    } catch (e) {
        res.sendStatus(500);
    }
}

export async function getById(req: Request, res: Response): Promise<void> {
    try {
        let id: number = Number(req.query['id']);
        let params: MybatisMapper.Params = { id: id };
        let result = await service.getById(params);
        res.status(200).send(result);
    } catch (e) {
        res.sendStatus(500);
    }
}

export async function create(req: Request, res: Response): Promise<void> {
    try {
        await service.create(req.body);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
}

export async function update(req: Request, res: Response): Promise<void> {
    try {
        let id: number = Number(req.query['id']);
        let params: MybatisMapper.Params = {
            id: id,
            ...req.body
        }
        await service.update(params);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
}

export async function remove(req: Request, res: Response): Promise<void> {
    try {
        let id: number = Number(req.query['id']);
        let params = { id: id };
        await service.remove(params);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
}
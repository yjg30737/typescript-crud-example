import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import router from './routes/router'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());

app.use('/', router);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(404);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    res.sendStatus(500);
});

app.listen(7070, () => {
    console.log('Started!');
});
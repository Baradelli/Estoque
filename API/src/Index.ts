import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import routes from './Routes';
import path from 'path';
import './database/connection';
import errorHandler from './errors/handler';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads' )))
app.use(errorHandler)

app.listen(3001, () => console.log('Server started at http://localhost:3001'));
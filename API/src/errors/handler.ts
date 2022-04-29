import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup';

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    console.error(error);

    return response.status(500).json({ message: 'Internal error server' });
};

export default errorHandler;

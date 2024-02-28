import {Response, Request, NextFunction} from "express";

function errorHandlerMd(err: any, req: Request, res: Response, next: NextFunction) {
  const errStatus = err.status || 500;
  const errMsg = err.message || 'Internal server error';

  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {},
  })
}

export default errorHandlerMd;

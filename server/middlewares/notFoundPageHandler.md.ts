import {Response, Request} from "express";

function notFoundHandlerMd(err: any, req: Request, res: Response) {
  const errStatus = 404;
  const errMsg = 'Not found';

  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
  });
}

export default notFoundHandlerMd;
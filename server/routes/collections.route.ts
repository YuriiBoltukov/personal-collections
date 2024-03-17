import { Response, Request, Router, NextFunction } from 'express';
import getCollections from '../controllers/collections';
const collectionsRouter = Router();

collectionsRouter.get(
  '/list',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await getCollections(req, res);
    } catch (err) {
      next(err);
    }
  },
);

export default collectionsRouter;

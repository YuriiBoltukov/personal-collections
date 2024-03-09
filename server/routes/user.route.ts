import user from "../controllers/user";
import {Response, Request, Router, NextFunction} from "express";
const userRouter = Router();

userRouter.get('/:id', async  (req: Request, res: Response, next: NextFunction) => {
  try {
    await user(req, res);
  } catch (err) {
    next(err)
  }
});

export default userRouter;

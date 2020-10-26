import { Request, Response, NextFunction } from 'express';
import { v4 as uuid } from 'uuid';

export const UserIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if(req.session && !req.session.userId) {
    req.session.userId = uuid();
  }
  next();
};
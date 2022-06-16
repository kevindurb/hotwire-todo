import { Request, Response } from 'express';

export const redirectTo =
  (path: string) => (request: Request, response: Response) =>
    response.redirect(path);

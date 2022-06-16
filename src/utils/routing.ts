import { Request, Response } from 'express';
import * as yup from 'yup';

export const redirectTo =
  (path: string) => (request: Request, response: Response) =>
    response.redirect(path);

export const asyncHandler =
  (handler: (request: Request, response: Response) => Promise<void>) =>
  async (request: Request, response: Response) => {
    try {
      await handler(request, response);
    } catch (e) {
      if (e instanceof yup.ValidationError) {
        response.status(400).end();
      } else {
        console.error(e);
        response.status(500).end();
      }
    }
  };

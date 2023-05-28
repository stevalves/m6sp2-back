import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { ZodError } from "zod";

const handleAppErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction
): Response => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.flatten().fieldErrors });
  }

  return res.status(500).json({
    message: err.message,
  });
};

export { handleAppErrorMiddleware };

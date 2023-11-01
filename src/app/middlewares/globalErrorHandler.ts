import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { IGenericErrorResponse } from "../../interfaces/error";

const globalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  let statusCode = 500;
  let message = "Something went wrong";
  let errorMessages: IGenericErrorResponse[] = [];

  if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
  });
};

export default globalErrorHandler;

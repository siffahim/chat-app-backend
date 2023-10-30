import { NextFunction, Request, Response } from "express";
import { createUserToDB, loginUserToDB } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);

  res.status(200).json({
    status: 200,
    message: "successfully created user",
    data: user,
  });
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await loginUserToDB(data);

  res.status(200).json({
    status: 200,
    message: "successfully login user",
    data: user,
  });
};

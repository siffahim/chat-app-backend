import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import UserRouter from "./app/modules/user/user.route";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", UserRouter);

//testing route
app.get("/", (req, res) => {
  res.json({
    message: "My health is optimal, and I'm responsive.",
  });
});

//global error handler
app.use(globalErrorHandler);

//api route not found;
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
    errorMessage: {
      path: req.originalUrl,
      message: "API NOT FOUND",
    },
  });
  next();
});

export default app;

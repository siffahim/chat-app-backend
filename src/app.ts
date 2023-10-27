import cors from "cors";
import express, { Application } from "express";
import UserRouter from "./app/modules/user/user.route";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", UserRouter);

export default app;

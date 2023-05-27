import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { usersRoutes } from "./routes/users.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes)
app.get("/", (req, res) => res.json("hello world"));

export default app;

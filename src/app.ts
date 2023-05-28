import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { usersRoutes } from "./routes/users.routes";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware";
import { loginRoutes } from "./routes/login.routes";
import { contactsRoutes } from "./routes/contacts.routes";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json());

app.use("/users", usersRoutes)
app.use("/login", loginRoutes)
app.use("/contacts", contactsRoutes)
app.get("/", (req, res) => res.json("hello world"));

app.use(handleAppErrorMiddleware)
export default app;

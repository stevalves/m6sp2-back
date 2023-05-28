import { Router } from "express";
import { createTokenController } from "../controllers/login.controller";
import { dataValidator } from "../middlewares/dataValidator.middleware";
import { loginSchemaRequest } from "../schemas/login.schema";

const loginRoutes = Router();

loginRoutes.post("", dataValidator(loginSchemaRequest), createTokenController);

export { loginRoutes };

import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readUsersController,
  updateUserController,
} from "../controllers/users.controller";
import { dataValidator } from "../middlewares/dataValidator.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schema";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const usersRoutes = Router();
usersRoutes.post("", dataValidator(userSchemaRequest), createUserController);
usersRoutes.get("", readUsersController);
usersRoutes.patch("", ensureAuthMiddleware, dataValidator(userSchemaUpdate), updateUserController);
usersRoutes.delete("", ensureAuthMiddleware, deleteUserController);

export { usersRoutes };

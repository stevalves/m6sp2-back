import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { readUsersService } from "../services/users/readUsers.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);
  return res.status(201).json(newUser);
};

const readUsersController = async (req: Request, res: Response) => {
  const users = await readUsersService();
  return res.json(users);
};

const updateUserController = async (req: Request, res: Response) => {
  const userId = res.locals.userId
  const user = await updateUserService(req.body, userId);
  return res.json(user);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId = res.locals.userId
  await deleteUserService(userId);
  return res.status(204).send();
};

export { createUserController, readUsersController, updateUserController, deleteUserController };

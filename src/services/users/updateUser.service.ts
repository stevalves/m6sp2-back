import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { tUserEdit } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schema";

const updateUserService = async (userData: tUserEdit, userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const oldUser = await userRepository.findOneBy({
    id: userId,
  });

  if (!oldUser) throw new AppError("User not found", 404);

  const updatedUser = userRepository.create({
    ...oldUser,
    ...userData,
  });

  await userRepository.save(updatedUser);
  return userSchemaResponse.parse(updatedUser);
};

export { updateUserService };

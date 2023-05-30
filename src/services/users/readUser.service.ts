import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { userSchemaResponse } from "../../schemas/users.schema";

const readUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) throw new AppError("User not found", 404);

  return userSchemaResponse.parse(user);
};

export { readUserService };

import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { tUser, tUsersRes } from "../../interfaces/users.interfaces";
import { Repository } from "typeorm";
import { usersSchemaResponse } from "../../schemas/users.schema";

const readUsersService = async (): Promise<tUsersRes> => {
  const userRepository: Repository<tUser> = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  return usersSchemaResponse.parse(users);
};

export { readUsersService };

import { hash } from "bcryptjs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { tUser, tUserReq, tUserRes } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schema";
import { AppError } from "../../errors/AppError";

const createUserService = async (data: tUserReq): Promise<tUserRes> => {
  const { email, password } = data;

  const userRepository: Repository<tUser> = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ email: email });

  if (findUser) throw new AppError("User already exists", 409);

  const hashedPass = await hash(password, 10);
  const user = userRepository.create({
    ...data,
    password: hashedPass,
  });

  await userRepository.save(user);
  return userSchemaResponse.parse(user);

};

export { createUserService };

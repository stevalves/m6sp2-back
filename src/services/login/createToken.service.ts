import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import tLoginReq from "../../interfaces/login.interfaces";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createTokenService = async ({
  email,
  password,
}: tLoginReq): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email: email });
  if (!user) throw new AppError("Invalid credentials", 403);

  const passMatch = await compare(password, user.password);
  if (!passMatch) throw new AppError("Invalid credentials", 403);

  const token = jwt.sign(
    {
      userName: user.name,
    },
      process.env.SECRET_KEY!,
    {
      expiresIn: "1h",
      subject: user.id,
    }
  );

  return token;
};

export { createTokenService };

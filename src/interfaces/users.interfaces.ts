import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
} from "../schemas/users.schema";

type tUser = z.infer<typeof userSchema>;
type tUserReq = z.infer<typeof userSchemaRequest>;
type tUserRes = z.infer<typeof userSchemaResponse>;
type tUsersRes = z.infer<typeof usersSchemaResponse>;
type tUserEdit = DeepPartial<tUser>;

export { tUser, tUserReq, tUserRes, tUsersRes, tUserEdit };

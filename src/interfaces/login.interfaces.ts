import { loginSchemaRequest } from "../schemas/login.schema";
import { z } from "zod";

type tLoginReq = z.infer<typeof loginSchemaRequest>;

export default tLoginReq;

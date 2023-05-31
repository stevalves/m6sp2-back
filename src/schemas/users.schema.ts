import { z } from "zod";

const userSchema = z.object
({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.string(),
  created_at: z.date(),
});

const userSchemaRequest = userSchema.omit({ id: true, created_at: true });
const userSchemaResponse = userSchema.omit({ password: true });
const usersSchemaResponse = userSchemaResponse.array();
const userSchemaUpdate = userSchemaRequest.partial();

export { userSchema, userSchemaRequest, userSchemaResponse, usersSchemaResponse, userSchemaUpdate };

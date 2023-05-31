import { z } from "zod";

const contactSchema = z.object
({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  created_at: z.date(),
});

const contactsSchemaResponse = z.array(contactSchema)
const contactSchemaRequest = contactSchema.omit({ id: true, created_at: true });
const contactSchemaUpdate = contactSchema.omit({ id: true, created_at: true }).partial();

export { contactSchema, contactSchemaRequest, contactSchemaUpdate, contactsSchemaResponse };

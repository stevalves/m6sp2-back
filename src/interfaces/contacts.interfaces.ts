import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  contactSchema,
  contactSchemaRequest,
  contactsSchemaResponse,
} from "../schemas/contacts.schema";

type tContactReq = z.infer<typeof contactSchemaRequest>;
type tContact = z.infer<typeof contactSchema>;
type tContactsRes = z.infer<typeof contactsSchemaResponse>;
type tContactUpdate = DeepPartial<tContactReq>;

export { tContact, tContactReq, tContactUpdate, tContactsRes };

import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { dataValidator } from "../middlewares/dataValidator.middleware";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contacts.schema";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const contactsRoutes = Router();

contactsRoutes.use(ensureAuthMiddleware);

contactsRoutes.post(
  "",
  dataValidator(contactSchemaRequest),
  createContactController
);
contactsRoutes.get("", listContactController);
contactsRoutes.patch(
  "/:id",
  ensureIsOwnerMiddleware,
  dataValidator(contactSchemaUpdate),
  updateContactController
);
contactsRoutes.delete("/:id", ensureIsOwnerMiddleware, deleteContactController);

export { contactsRoutes };

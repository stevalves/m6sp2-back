import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { AppError } from "../../errors/AppError";
import { tContact, tContactUpdate } from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contacts.schema";

const updateContactService = async (
  data: tContactUpdate,
  contactId: string
): Promise<tContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const oldContact: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });

  if (!oldContact) throw new AppError("Contact not found", 404);

  const newContactData = contactRepository.create({
    ...oldContact,
    ...data,
  });

  await contactRepository.save(newContactData);
  return contactSchema.parse(newContactData);
};

export { updateContactService };

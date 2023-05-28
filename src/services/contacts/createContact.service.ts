import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import {
  tContact,
  tContactReq,
} from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contacts.schema";

const createContactService = async (
  data: tContactReq,
  userId: string
): Promise<tContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const usersRepository = AppDataSource.getRepository(User);

  const user: User | null = await usersRepository.findOneBy({ id: userId });

  if (!user) throw new AppError("User not found", 404);

  const contact: Contact = contactRepository.create({
    ...data,
    user,
  });

  await contactRepository.save(contact);
  return contactSchema.parse(contact);
};

export { createContactService };

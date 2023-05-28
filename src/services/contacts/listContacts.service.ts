import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entitie";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { tContactsRes } from "../../interfaces/contacts.interfaces";
import { contactsSchemaResponse } from "../../schemas/contacts.schema";
import { Repository } from "typeorm"

const listContactsService = async (userId: string): Promise<tContactsRes> => {
  const contactsRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await usersRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact: Contact[] = await contactsRepository.find({
    where: {
      user: {
        id: userId
      },
    },
  });

  return contactsSchemaResponse.parse(contact);
};

export { listContactsService };

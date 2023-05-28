import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entitie";

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactId: string = req.params.id;
  const userId: string = res.locals.userId;

  const contact = await contactRepository.findOne({
    where: { id: contactId },
    relations: { user: true },
  });

  if (!contact) return res.status(404).json({ message: "contact not found" });
  if (contact.user.id != userId)
    return res.status(403).json({ message: "You don't have permission" });

  return next();
};

export { ensureIsOwnerMiddleware };

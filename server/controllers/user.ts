import {Response, Request} from "express";
import {Role, User} from "../models/user.interface";

function prepareUser(user: any) {
  return {
    id: user._id.toString(),
    title: user.title,
  };
}

async function user(req: Request, res: Response) {
  //const collectionsDB = await Collection.find({});
  //const collections = collectionsDB.map(prepareCollection);
  //throw new Error('BROKEN')

  const user: User =
    {
      id: '12',
      name: 'Vasya',
      email: 'vasya@gmail.com',
      role: Role.admin
    }


  res.send(user)
}

export default user;

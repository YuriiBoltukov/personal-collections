import {Response, Request} from "express";
import {Role, User} from "../interfaces/user.interface";

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

  const admin = 12;

  if (Number(req.params.id) === admin) {
    const user: User =
        {
          id: '12',
          name: 'Vasya',
          email: 'vasya@gmail.com',
          role: Role.admin
        }


    res.send(user)
  } else {
    const user: User =
        {
          id: '1',
          name: 'Petya',
          email: 'petya@gmail.com',
          role: Role.user
        }


    res.send(user)
  }

}

export default user;

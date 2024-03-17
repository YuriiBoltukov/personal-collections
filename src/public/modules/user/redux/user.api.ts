import { User } from '../models/user.interfaces.ts';

const USER_URL = 'http://localhost:1000/user/';

export async function getUser(id: User['id']): Promise<User | null> {
  let result: User | null = null;
  try {
    const response = await fetch(USER_URL + id);
    result = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return result;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export enum Role {
  admin = 'admin',
  user = 'user',
}

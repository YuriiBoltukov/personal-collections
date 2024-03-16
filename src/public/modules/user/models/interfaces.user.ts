import { Role } from './role.enum.ts';

export interface User {
  name: string;
  email: string;
  id: string;
  role: Role;
}
export interface Collection {
  id: string;
  name: string;
  collectionId: string;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  date: string;
}
export interface User {
  name: string;
  email: string;
  id: string;
  role: string;
  collections: Collection[];
}
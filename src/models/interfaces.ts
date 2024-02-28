export interface Collection {
  id: string;
  name: string;
  item: Item[];
}

export interface Item {
  id: string;
  name: string;
  description: string;
  date: string;
}
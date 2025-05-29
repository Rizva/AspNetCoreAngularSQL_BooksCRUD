import { Book } from "./book";

export interface Author {
  id?: number;
  name: string;
  birthDate: Date;
  deathDate?: Date;
  bio?: string;
  imageURL?: string;
  books?: Book[];

}

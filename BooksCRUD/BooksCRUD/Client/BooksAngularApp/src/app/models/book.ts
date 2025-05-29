import { Author } from "./author";

export interface Book {
  id?: number;
  title: string
  isbn: string;
  publicationYear: Date;
  description?: string;
  imageURL?: string;
  authorID: number;
  author?: Author

}

import { GENRE } from '@common/constants/enums';
import { LibraryCategory } from '@common/types';

export abstract class Book {
  private id: number;
  private isbn: number;
  title: string;
  author: string;
  genre: GENRE[];
  cover: string;
  readonly category: LibraryCategory;

  constructor(
    id: number,
    isbn: number,
    title: string,
    author: string,
    genre: GENRE[],
    cover: string,
    category: LibraryCategory,
  ) {
    this.id = id;
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.cover = cover;
    this.category = category;
  }

  get itemDetails() {
    return {
      id: this.id,
      isbn: this.isbn,
      title: this.title,
      author: this.author,
      cover: this.cover,
    };
  }
}

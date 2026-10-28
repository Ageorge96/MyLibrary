import { GENRE, STATUS } from "@common/constants/enums";

type Section = 'bookshelf' | 'wishlist';

export class Book {
  private id: number;
  title: string; 
  author: string;
  genre: GENRE[];
  cover: string;

  constructor(id: number, title: string, author: string, genre: GENRE[], cover: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.cover = cover
  }
}

export class ShelfBook extends Book {
  status: STATUS;
  bookmark: number;
  private section: Section

  constructor(id: number, title: string, author: string, genre: GENRE[], status: STATUS, cover: string) {
    super(id, title, author, genre, cover)
    this.status = status
    this.bookmark = 0
    this.section = 'bookshelf'
  }

  getShelfItem() {

    return {
      title: this.title,
      author: this.author,
      genre: this.genre,
      status: this.status,
      bookmark: this.bookmark
    }
  }


  editBookmark(page: number) {
    if (page < 0) {
      throw new Error("Bookmark should be a positive number")
    }
    this.bookmark = page;
  }
}
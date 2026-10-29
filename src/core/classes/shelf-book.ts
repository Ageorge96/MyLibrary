import { GENRE, STATUS } from "@common/constants/enums";
import { Book } from "./book";

export class ShelfBook extends Book {
  private status: STATUS;
  bookmark: number;

  constructor(
    id: number,
    isbn: number,
    title: string,
    author: string,
    genre: GENRE[],
    status: STATUS,
    cover: string,
  ) {
    super(id, isbn, title, author, genre, cover, 'bookshelf');
    this.status = status;
    this.bookmark = 0;
  }

  get itemDetails() {
    const baseDetails = super.itemDetails;
    return {
      ...baseDetails,
      genre: this.genre,
      status: this.status,
      bookmark: this.bookmark,
    };
  }

  editBookmark(page: number) {
    if (page < 0) {
      throw new Error('Bookmark should be a positive number');
    }
    this.bookmark = page;
  }
}
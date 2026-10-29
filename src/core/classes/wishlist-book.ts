import { GENRE, STATUS } from "@common/constants/enums";
import { Book } from "./book";
import { ShelfBook } from "./shelf-book";

export class WishlistBook extends Book {
  readonly publisher: string;
  readonly description: string;
  readonly rating: string;

  constructor(
    id: number,
    isbn: number,
    title: string,
    author: string,
    genre: GENRE[],
    status: STATUS,
    cover: string,
    publisher: string,
    description: string,
    rating: string,
  ) {
    super(id, isbn, title, author, genre, cover, 'wishlist');
    this.publisher = publisher;
    this.description = description;
    this.rating = rating;
  }

  get itemDetails() {
    const baseDetails = super.itemDetails;

    return {
      ...baseDetails,
      publisher: this.publisher,
      description: this.description,
      rating: this.rating,
    };
  }

  promote() {
    // add sanitiser that checks the genre include in the listing
    // and adds them if they match app genres
    const { id, isbn, title, author, cover } = this.itemDetails;
    const promotedBook = new ShelfBook(
      id,
      isbn,
      title,
      author,
      [],
      STATUS.READY,
      cover,
    );

    return promotedBook;
  }
}

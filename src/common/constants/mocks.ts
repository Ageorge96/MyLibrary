import { Book } from '../types';
import { faker } from '@faker-js/faker';
import { getRandomNumber } from '../utils';
import { ShelfBook } from '../../core/classes/shelf-book';

export function getMockBooks(n: number = 1): Book | Book[] {
  if (n === 1) {
    return {
      title: faker.book.title(),
      author: faker.book.author(),
      genre: [faker.book.genre()],
      status: 'Ready to Start',
      bookmark: getRandomNumber(0, 800),
    };
  }
  const mockBooks: Book[] = [];
  for (let i = 0; i < n; i++) {
    const mockBook: Book = {
      title: faker.book.title(),
      author: faker.book.author(),
      genre: [faker.book.genre()],
      status: 'Ready to Start',
      bookmark: getRandomNumber(0, 800),
    };

    mockBooks.push(mockBook);
  }

  return mockBooks;
}

export function getMockShelfBooks(n: number = 1): ShelfBook | ShelfBook[] {
  if (n === 1) {
    const mockBook = new ShelfBook(
      12,
      12,
      faker.book.title(),
      faker.book.author(),
      [faker.book.genre()],
      'Ready to Start',
      'https://www.thebookdesigner.com/wp-content/uploads/2024/02/91pSpl1oVVL._SL1500_.jpg',
    );
    mockBook.editBookmark(getRandomNumber(0, 800));
    return mockBook;
  }
  const mockBooks: ShelfBook[] = [];
  for (let i = 0; i < n; i++) {
    const mockBook = new ShelfBook(
      12,
      12,
      faker.book.title(),
      faker.book.author(),
      [faker.book.genre()],
      'Ready to Start',
      'https://www.thebookdesigner.com/wp-content/uploads/2024/02/91pSpl1oVVL._SL1500_.jpg',
    );

    mockBook.editBookmark(getRandomNumber(0, 800));

    mockBooks.push(mockBook);
  }

  return mockBooks;
}

import { Book } from "../types";
import { faker } from '@faker-js/faker';
import { getRandomNumber } from "../utils";

export function getMockBooks(n: number = 1): Book | Book[] {
  if (n === 1) {
    return {
      title: faker.book.title(),
      author: faker.book.author(),
      genre: [faker.book.genre()],
      status: 'Ready to Start',
      bookmark: getRandomNumber(0, 800)
    }
  }
  const mockBooks: Book[] = []
for (let i = 0; i < n; i++) {
    const mockBook: Book = {
      title: faker.book.title(),
      author: faker.book.author(),
      genre: [faker.book.genre()],
      status: 'Ready to Start',
      bookmark: getRandomNumber(0, 800)
    }

    mockBooks.push(mockBook)
  }

  return mockBooks
}
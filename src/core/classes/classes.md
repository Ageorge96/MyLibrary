# Classes

## Library

This class will act as the users database for their books (bookshelf and wishlist) and settings. It will populate the different sections after pulling all the books from the database

### Behaviours/Function

The Library class needs to add and remove books from the database

### Properties

- ShelfBooks: Book[]
- Wishlist: Books[]
- Settings: Record

### Method

- populateBookshelf (books: Books[]) {
  filter books by section 'bookshelf'
}

- populateWishlist (books: Books[]) {

}


## Book

The book class will be a parent classes to Shelf Books and Wishlist Books. Needs to follow factory patterns so that additional Book classes can be easily add.

### Behaviours/functions

All books need to store standard book data, title, author, genre, etc. They all need the ability to morph their data (some sections maybe limited in what they can edit)

### Properties

- ID: number (private)
- Title: string
- Author: string
- Genre: Genre
- Cover: string
- Description/Synopsis: string

### Method

- editBook (newData: Book) {
  set new book data
}
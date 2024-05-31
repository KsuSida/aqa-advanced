import {Book} from "./Book.js";
import {EBook} from "./EBook.js";

const book1 = new Book("Harry Potter", "Joanne Rowling", 1997);
const book2 = new Book("Alice in Wonderland", "Lewis Carrol", 1865);

book1.printInfo;
book2.printInfo;

const ebook1 = new EBook("Bridget Jones's Diary", "Helen Fielding", 1996, "pdf");
const ebook2 = new EBook("Bridget Jones: The Edge of Reason", "Helen Fielding", 1999, "pdf");

ebook1.printInfo;
ebook2.printInfo;

book1.year = 'year 2220';
ebook1.format = 123;

let booksArr1 = [
    {title: book1.title, author: book1.author, year: book1.year},
    {title: book2.title, author: book2.author, year: book2.year},
    {title: ebook1.title, author: ebook1.author, year: ebook1.year, format: ebook1.format},
    {title: ebook2.title, author: ebook2.author, year: ebook2.year, format: ebook2.format}
];
console.log(Book.yearCompare(booksArr1));
console.log(EBook.bookUpgrade(book1, ".pdf"));

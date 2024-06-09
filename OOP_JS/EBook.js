import { Book } from './Book.js';

export class EBook extends Book {
	constructor(title, author, year, format) {
		super(title, author, year);
		this._format = format;
	}
	get format() {
		return this._format;
	}
	set format(value) {
		if (typeof value != `string`) {
			console.log(`Check the value. Type of format should be string`);
			return;
		}
		this._format = value;
	}
	printInfo() {
		console.log(`${this.title}, ${this.author}, ${this.year}, ${this.format}`);
	}
	static bookUpgrade(book, format) {
		const b = new EBook(book.title, book.author, book.year, format);
		return b;
	}
}

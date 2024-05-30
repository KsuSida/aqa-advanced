export class Book{
    constructor(title, author, year){
        this._title = title,
        this._author = author,
        this._year = year
    }
    get title(){
        return this._title;
    }
    set title(value){
        if (typeof value != `string`) {
            console.log(`Check the value. Type of title value should be string`);
            return;
        }
        this._title = value;
    }
    get author(){
        return this._author;
    }
    set author(value){
        if (typeof value != `string`) {
            console.log(`Check the value. Type of author value should be string`);
            return;
        }
        this._author = value;
    }
    get year(){
        return this._year;
    }
    set year(value){
        if (typeof value != `number`) {
            console.log(`Check the value. Type of year should be number`);
            return;
        }
        this._year = value;
    }
    get printInfo(){
        console.log(`${this.title}, ${this.author}, ${this.year}`)
    }
    static yearCompare(arr){
        let minYear = arr[0];
        for (const a of arr){
            if(a.year < minYear.year){
                minYear = a}
        }
        console.log(minYear);
    };
};

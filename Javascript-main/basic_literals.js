const s = 'Hello';
console.log(s.toUpperCase());
// --------
const s1 = 'Hello';
console.log(typeof s1);

const s2 = new String('Hello');
console.log(typeof s2);
// -----output
// string
// object
console.log(window);
// window.alert();
// alert(1);
// console.log(navigator.appVersion);

// ----object literal---
// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };

// console.log(book1, book1.title, book1.getSummary());
// console.log(Object.values(book1));
// console.log(Object.keys(book1));

// =========constructor======
// ---constructor--
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;

//     this.getSummary = function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     };
// }
// // Instatiate an object
// const book1 = new Book('Book One', 'John Doe', '2013');
// const book2 = new Book('Book Two', 'John Doe2', '2012');

// console.log(book2, book2.getSummary());


// ======Prototypes=====
// constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// getSummary
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// getAge
// Book.prototype.getAge = function() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
// };

// revise / change year
// Book.prototype.revise = function(newYear) {
//     this.year = newYear;
//     this.revised = true;
// }

// Instatiate an object
// const book1 = new Book('Book One', 'John Doe', '2013');
// const book2 = new Book('Book Two', 'John Doe2', '2012');

// console.log(book2, book2.getSummary(), book2.getAge());

// revise / change year
// console.log(book2);
// book2.revise('2018');
// console.log(book2);


// =========Inheritence===
// constructor
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// getSummary
// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// Magazine Constructor
// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year);

//     this.month = month;
// }

// Inherit Prototype
// Magazine.prototype = Object.create(Book.prototype);

// Instantiate magazine Object
// const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// Use Magazine Constructor
// Magazine.prototype.constructor = Magazine;

// console.log(mag1);
// console.log(mag1.getSummary());





// ============Object create =======
// Object of protos
// const bookProtos = {
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     },
//     getAge: function() {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     }
// };

// create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'John Doe';
// book1.year = '2013';

// const book1 = Object.create(bookProtos, {title: { value: 'Book One' },
// author: { value: 'John Doe' },
// year: { value: '2013' }
// });

// console.log(book1);

// ===== classes======
// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     getSummary() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }

//     getAge() {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     }
//     revise(newYear) {
//         this.yaer = newYear;
//         this.revised = true;
//     }

//     static topBookStore() {
//         return 'new name';
//     }
// }

// Instantiate Object
// const book1 = new Book('Book One', 'John Doe', '2013');

// console.log(book1)
// book1.revise('2018');
// console.log(book1);

// console.log(Book.topBookStore());

// ==============Sub classes =======
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
}

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Magazine Sub class
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2013', 'Jan');

console.log(mag1.getSummary());
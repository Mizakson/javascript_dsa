// notes on getters and setters

/* 
it is possible to obtain values from an object
and set the value of a property within an object

these functions are called getters and setters

getter:
functions that are meant to return (get) the value of 
an object's private variable to the user without the user
directly accessing the private variable

setter:
functions that are meant to modify (set) the value of
an object's private value based on the variable passed into the
setter function.
    - this could involve calculations, or overwriting the previous value

here is a code example
*/

class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    //setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
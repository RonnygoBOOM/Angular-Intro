function log(message: string) {
    console.log(message);
}

var message = 'Hello World';

log(message);



//TYPESCRIPT TYPE ASSERTION:
let words1;
let words2;
let words3;
words1 = 'abc';
words2 = 'bcd';
words3 = 'cde';
//The following doesn't work because typescript cannot use ".endsWith" with an 'any' type, only a string
let endsWithC = words1.endsWith('c');

// to do a type assertion in typescript, we can write it in 2 ways:
let endsWithD = (<string>words2).endsWith('d');
let endsWithE = (words3 as string).endsWith('e');



//ARROW FUNCTIONS

let logIt = function(message: string) {
    console.log(message);
}

let doLog = (message: string) => console.log(message);





//INTERFACES

//writing functions with many parameters is bad practice. Instead, utilize OOP encapsulation to use an object

/*Non Example:*/ 

// let drawPoint = (a, b, c, d, e, f, g) => {
//     some code
// }


// example using in-line object:

// let drawPoint = (point: { a: number, b: number}) => {

// }

// drawPoint({
//     x: 1,
//     y: 2,
// })



//example using an interface:

interface Point {
    x: number,
    y: number,
}

let drawPoint = (point: Point) => {

}

drawPoint({
    x: 1,
    y: 2,
})



//interfaces can describe things in the object, including functions, but the implementation of those functions must occur somewhere else.

/*
interface Point {
    x: number,
    y: number,
    draw: () => void
}

let drawPoint = (point: Point) => {

}

drawPoint({
    x: 1,
    y: 2,
})
*/





//CLASSES

/*
class Point {
    x: number;
    y: number;

    draw() {
        console.log('X: ' + this.x + ', 'Y: ' + this.y);
    }

    getDistance(another: Point) {

    }
}

let point: Point = new Point();
point.x = 1;
point.y = 2;
point.draw();
*/

//when a function is part of a class, it is called a method. 
// by using the "new" operator, we allocate memory to the custom object Point. 
// an object is an instance of a class. 


//CONSTRUCTOR

//every class can have a constructor, which is a method that is called whenever we make an instance of that class.
class PointConstructor {
private x: number; /* private makes it so that this is not accessable to make changes. This is called an Access Modifier */
y: number;

constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
}

drawConstructor() {
    console.log('X: ' + this.x + ',Y: ' + this.y);
}
}

let point = new PointConstructor(1, 2);
point.drawConstructor();
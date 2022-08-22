// using new name by using as 
import { message, user as us, test } from './library.js';
console.log(message);
// import { user } from './library.js';
// user("Sonjoy");
console.log(us("Sonjoy"));

let a = new test();

// if we using every Element from library then just using * and onk name 

// import * as every from './library.js';

// console.log(every.message);
// console.log(every.user("Priya"));
//in fefault function we can use simple name
import def from './library.js';
//or we can use
// import {default as def} from './library.js';
def();
import { user2 } from './bridge.js';
console.log(user2());
export default function(){
    console.log("default function");

}
let message = "ES6 MOdules";

function user (name){
    // console.log(`Hello ${name}`);
    return (`Hello ${name}`);
}

class test {
    constructor(){
        console.log("Constructor called");
    }
}

export {message, user, test};

function user2(){
    return "Hello";
}
export {user2};
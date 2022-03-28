// helloWorld function 
function helloWorld() {

    return "Hello, World!";
}
// instructions
// function sayHello(named) {
//     if (named === "Alex"){
//         return ("Hello, "+ named + "!");
//     }
//     else {
//         return ("Hello, "+ named + "!");
//     }
// }

// what I actually wrote the first time

function sayHello(named) {
    if (named === undefined) {
        return "Hello, World!"
    } else {
        return ("Hello, " + named + "!");
    }
}


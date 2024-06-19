console.log(a); // undefined
var a = 10;

try {
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
} catch (error) {
    console.log(error);
}
let b = 20;

try {
    console.log(c); // ReferenceError: Cannot access 'c' before initialization
} catch (error) {
    console.log(error);
}
const c = 30;

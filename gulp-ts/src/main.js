"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
function showHello(divName, name) {
    const elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
let a = {
    name: 'zjc',
    sex: 'male'
};
let b = Object.assign({}, a);
console.log(b);
showHello("greeting", "TypeScript!");
//# sourceMappingURL=main.js.map
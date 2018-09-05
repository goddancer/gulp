import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

let a = {
    name: 'zjc',
    sex: 'male'
};

let b = Object.assign({}, a);

console.log(b);

showHello("greeting", "TypeScript!");
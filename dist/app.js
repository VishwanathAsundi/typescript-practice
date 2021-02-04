"use strict";
function printResult(e1) {
    console.log(e1.name);
    if ('startDate' in e1) {
        console.log(e1.startDate);
    }
    if ('privileges' in e1) {
        console.log(e1.privileges);
    }
}
printResult({ name: 'Vishwa', startDate: new Date() });
let inputEl = document.getElementById('hello-btn');
inputEl.value = "hey";
const myHandler = {
    "hhh": "hello"
};

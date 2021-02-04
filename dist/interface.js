"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n, age) {
        this.name = n;
        if (age) {
            this.age = age;
        }
    }
    greet(phrase) {
        if (this.age) {
            console.log(phrase + ' ' + this.name + ' age is ' + this.age);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user1;
user1 = new Person("vishwa", 23);
user1.greet("Hi there");
console.log(user1);

"use strict";
class Person {
    constructor(n, age) {
        this.name = n;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name + ' age is ' + this.age);
    }
}
let user1;
user1 = new Person("vishwa", 23);
user1.greet("Hi there");
console.log(user1);

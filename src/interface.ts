interface Aged {
    age: number;
}
interface Greetable extends Aged {
    readonly name: string;
    greet(phrase: string): void;
}


class Person implements Greetable {
    name: string;
    age: number;
    constructor(n: string, age: number) {
        this.name = n;
        this.age = age;
    }
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name + ' age is ' + this.age);
    }

}

let user1: Greetable;
user1 = new Person("vishwa", 23);
user1.greet("Hi there");
console.log(user1);
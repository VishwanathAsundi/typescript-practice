interface Aged {
    age?: number; //Age is option property 
}
interface Greetable extends Aged {
    readonly name: string;
    greet(phrase: string): void;
}

interface AddFun {
    (n1: number, n2: number): number;
}
let add: AddFun;
add = (n1: number, n2: number) => {
    return n1 + n2;
}



class Person implements Greetable {
    name: string;
    age?: number;
    constructor(n: string, age?: number) {
        this.name = n;
        if (age) {
            this.age = age;
        }
    }
    greet(phrase: string) {
        if (this.age) {
            console.log(phrase + ' ' + this.name + ' age is ' + this.age);
        } else {
            console.log('Hi!');
        }
    }

}

let user1: Greetable;
user1 = new Person("vishwa", 23);
user1.greet("Hi there");
console.log(user1);
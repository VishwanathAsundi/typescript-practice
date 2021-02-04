//custom type 1
type Admin = {
    name: string;
    privileges: string[];
}
type Employee = {
    name: string;
    startDate: Date;
}

type combinedType = Admin & Employee;

type unknownType = Admin | Employee;

function printResult(e1: unknownType) {
    console.log(e1.name);
    if ('startDate' in e1) {
        console.log(e1.startDate);
    }
    if ('privileges' in e1) {
        console.log(e1.privileges);
    }

}
printResult({ name: 'Vishwa', startDate: new Date() })

let inputEl = document.getElementById('hello-btn')! as HTMLInputElement;

inputEl.value = "hey";

interface errorHandler {
    //for dynamic property name
    [prop: string]: string;
}
const myHandler: errorHandler = {
    "hhh": "hello"
}

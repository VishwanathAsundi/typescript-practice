"use strict";
// abstract class Department {
//     // private readonly id: string;
//     // private name: string;
//     protected employees: string[] = [];
//     constructor(protected readonly id: string, public name: string) {
//         // this.id = id;
//         // this.name = n;
//     }
//     abstract describe(this: Department): void;
//     addEmployee(employee: string) {
//         // validation etc
//         // this.id = 'd2';
//         this.employees.push(employee);
//     }
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }
// class ITDepartment extends Department {
//     admins: string[];
//     constructor(id: string, admins: string[]) {
//         super(id, 'IT');
//         this.admins = admins;
//     }
//     describe() {
//         console.log("It department id:", this.id);
//     }
// }
// class AccountingDepartment extends Department {
//     lastReport: string;
//     private static instance: AccountingDepartment;
//     private constructor(id: string, private reports: string[]) {
//         super(id, 'Accounting');
//         this.lastReport = reports[reports.length - 1];
//     }
//     static getInstance() {
//         if (this.instance) {
//             return this.instance;
//         }
//         this.instance = new AccountingDepartment('64735', []);
//         return this.instance;
//     }
//     //getter method 
//     get getMostRecentReport() {
//         if (this.lastReport) {
//             return this.lastReport;
//         }
//         throw new Error('No report found');
//     }
//     //setter
//     set getMostRecentReport(value: string) {
//         if (!value) {
//             throw new Error('Please pass in valid value');
//         }
//         this.addReport(value);
//     }
//     addReport(text: string) {
//         this.reports.push(text);
//         this.lastReport = text;
//     }
//     printReports() {
//         console.log(this.reports);
//     }
//     describe() {
//         console.log("Acoounting department id:", this.id);
//     }
// }
// const it = new ITDepartment('d1', ['Max']);
// it.addEmployee('Max');
// it.addEmployee('Manu');
// // it.employees[2] = 'Anna';
// it.describe();
// it.name = 'NEW NAME';
// it.printEmployeeInformation();
// console.log(it);
// it.describe();
// const accounting = AccountingDepartment.getInstance();
// accounting.getMostRecentReport = "new report";
// accounting.addReport('Something went wrong...');
// console.log(accounting.getMostRecentReport);
// accounting.printReports();
// // accounting.addEmployee("Vishwa");
// // accounting.addEmployee("Netra");
// // accounting.printEmployeeInformation();
// accounting.describe();
// // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// // accountingCopy.describe();

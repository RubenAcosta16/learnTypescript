// una forma de ejecutar codigo ts:
// ejecuta en npm:
// tsc
// node index.js

// you can separate to make more readible
let sales: number = 123_456_789;
let course: string = "TypeScript";
let isPublished: boolean = true;

// type any, is same like normal variable in js
let level;

function render(document: any) {
  console.log(document);
}

// arrays

let numbers: number[] = [1, 2, 3];

let numbers2: (number | string)[] = [1, 2, "3"];

// tuples

let user: [number, string] = [1, "Ruben"];

// enums

// const small=1
// const medium=2
// const large=3

const enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}

let mySize = Size.Medium;

console.log(mySize);

// functions

function calculateTax(income: number, taxYear: number = 2222): number {
  // let x
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

// calculateTax(10_000,2022)
calculateTax(10_000);

// objects

// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Rub",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// // employee.id=22

// type alias

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Rub",
  retire: (date: Date) => {
    console.log(date);
  },
};

// employee.id=22

//   union types

// function kgToLbs(weight: number | string): number {
//   // narrowing
//   if (typeof weight === "number") {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }

// intersection types

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag() {},
  resize() {},
};

// literal types
// Literal(exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

let metric: Metric = "cm";

// null values

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase);
  else console.log("hola");
}

greet(undefined);

// optional chaining

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if (customer !== null && customer !== undefined) {
//   console.log(customer.birthday);
// }

// optional property access operator
console.log(customer?.birthday?.getFullYear);

// optional element access operator

// customers?.[0]

// optional call
let log:any=null

// I think if log is a function it would be executed, if it not, returns undefined
log?.("a")
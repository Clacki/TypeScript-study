/** @format */

// function hello(name: string) {
//   console.log("hello world");
// }

// hello("TypeScript");

// 기본 타입 템플릿

export {};

// 1. string
let myString: string = "hello";
console.log("String:", myString);

// 2. number
let myNumber: number = 123;
console.log("Number:", myNumber);

// 3. boolean
let myBoolean: boolean = true;
console.log("Boolean:", myBoolean);

// 4. null
let myNull: null = null;
console.log("Null:", myNull);

// 5. any
let myAny: any = "I can be anything";
console.log("Any string:", myAny);

// myAny 값 변경
myAny = 2025;
console.log("changed to number:", myAny);

// myAny 값 변경
myAny = false;
console.log("changed to boolean:", myAny);

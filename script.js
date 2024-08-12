//  const cartoon=["oggy","ben10"];
//   cartoon[1]="doremon";
//   console.log(cartoon);

// const x=Boolean([]);
// console.log(x);

// function isEmpty(array) {
//   return array.length === 0;
// }

// let x;
// x = isEmpty([]);
// console.log(x);

// x = isEmpty([1, 2, 3, 4]);
// console.log(x);
// function lengthyString(str) {
//   if (str.length >= 5 && str.includes("a")) {
//     console.log("present");
//     return true;
//   } else {
//     console.log("not present");
//     return false;
//   }
// }

// let x;
// x = lengthyString("a");
// console.log(x);
// const x = "apple,cider,vinegar";
// console.log(x.split(","));

// const x = ["apple", "cider"];
// console.log(x.reverse("/"));

function reverseString(str) {
  const arr=str.split("");
  return arr.reverse().join("");

}
let x;
x = reverseString("hello");
console.log(x);

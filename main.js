"use strict";
// let friend = "marker";
// console.log(friend.length);
// console.log(friend.toUpperCase());
//  console.log(friend.toLowerCase());
// console.log(friend.charAt(4));
// console.log(friend.at(-1));
// console.log(friend.includes("m"));

// let naam = prompt("enter the name :");
// if (naam.includes(" ")) {
//   console.log("full name");
// }else if (naam.endsWith(" ")){
// console.log('it is first name');
// } else {
//   console.log("full name nhi");
// }
// let userInput = prompt("enter your name (First Name or Full Name):");
// let naam = prompt("Please enter your name:");

// if (naam.includes(" ")) {
//   console.log("Full name:", naam);
// } else {
// //   let firstName = prompt("Please enter your first name:");
//   console.log("Full name:", naam + " " + firstName);
// }

// const userInput = prompt("enter your name");
// if (userInput.includes(" ")) {
//   if (userInput.at(-1) !== "") {
//     console.log("its a full name");
//   } else {
//     console.log("there a space at the end");
//   }
// } else {
//   console.log("its a first");
// }

// const userInput="BrendenEich      ";
// console.log(userInput.trim());
// const checkName=userInput.trim();
// if(checkName.includes(" ")){
//   console.log("its a full name");
// }
// else{
//   console.log('its a first name ');

// }

// const userInput="a";
// if(userInput.trim().includes(" ")){
//     console.log("its a full name");
//   }
//   else{
//     console.log('its a first name ');

//   }

// function greeting(word, name) {

//   if (word == undefined) word = "hello";
//   if(name==undefined) name="user";
//   console.log(word, name);
// }
// greeting("hello", "sneha");
// greeting("hey", "sneha");
// greeting();
//  function weekDays(num){
//   num=Number(num);
//   if(num===1||num==="1"){
//     console.log("sunday");    
//   }
//   else if(num==2||num==="2"){
//     console.log('monday');

//   }
//   else if(num==3||num==="3"){
//     console.log('tuesday');

//   }
//   else if(num==4||num==="4"){
//     console.log('wednesday');

//   }else if(num==5||num==="5"){
//     console.log('thursday');

// }
//  }
//  weekDays(2);
//  weekDays("4");

// function capital(word){
//   finalstr=word[0].toUpperCase()+word.slice(1,).toLowerCase()
// }

//   function greeting(greet="Hello",name="User" ){
//   // console.log(greet+" "+name+" nice to meet you");
//   const str2 =`${greet} ${name} , nice to meet you`
//   console.log(str2);

// }
//  greeting();

// function weekDays(day){
//   day=Number(day);
//   switch(day){
//     case 1:
//       console.log("mon");
//       break;
//       case 2:
//       console.log("tue");
//       break;
//       case 3:
//       console.log("wed");
//       break;
//       case 4:
//       console.log("thur");
//       break;
//       case 5:
//       console.log("fri");
//       break;
//       default:
//         console.log('invalid');
//   }
// }
// weekDays(4)
// function weekDays(dayInput){
// dayInput=Number(dayInput);
// const days =["sund","mon","tue","wed"];
// // console.log(days.length);
// // console.log(days[day-1]);
// const day= days[dayInput-1];
// if(dayInput){
//   console.log(day);
// }else{
//   console.log('not a valid');

// }
// }
// weekDays(2)
// weekDays()

// function powerofNumber(num1,num2){
//   return num1**num2
// }
// const x =powerofNumber(3,4)
// console.log(x);
// coelasing function
// function weekDays(dayInput){
//   dayInput=Number(dayInput);
//   const days =["sun","mon","tue","wed"];
//   // console.log(days.length);
//   // console.log(days[day-1]);
//   const day= days[dayInput-1];
//    return day ?? "invalid";
//   }
//   console.log(weekDays(1));
//   console.log(weekDays());

// function action(letter, num) {
//     const alphabets = "abcdefghijklmnopqrstuvwxyz"
//     const UpperAlph = alphabets.toUpperCase();
//     let newStr = ""
//     for (let i of letter) {
//         if (alphabets.includes(i)) {
//             const index = alphabets.indexOf(i);
//             newIndex = (index + num) % 26;
//             newStr += alphabets[newIndex];
//         } else if (UpperAlph.includes(i)) {
//             const index = UpperAlph.indexOf(i);
//             let newIndex = (index + num) % 26;
//             newStr += UpperAlph[newIndex];
//         } else {
//             newStr += i
//         }
//     }
// }
// console.log(action("abc", 3));

// function action(letter, num) {
//     const alphabets = "abcdefghijklmnopqrstuvwxyz"
//     // const upperAlphabets = alphabets.toUpperCase();
//     let newStr = ""
//     for (let i of letter) {
//         const index = alphabets.indexOf(i);
//         if (index === -1) {
//             newStr += i;
//             continue;
//         }
//         let newIndex = index + num;
//         if (newIndex > 25) {
//             newIndex %= 26;
//         }
//         const newChar = alphabets[newIndex];

//         newStr += newChar

//     }
//     console.log(newStr);

// }
// action("abc-abc hello", 2)

function encrypt(string) {
    function generateRandom() {
        const rn = Math.ceil(Math.random() * 10);
        return rn;
    }
    function addText(text, key) {
        let alphabets = "abcdefghijklmnopqrstuvwxyz";
        let encrypted = "";

        for (let char of text) {
            // If it is a special character
            if (!alphabets.includes(char) && !alphabets.toUpperCase().includes(char)) {
                encrypted += char;
                continue;
            }

            // Find index or -1
            let index = alphabets.indexOf(char);

            // This will run if the alphabet is uppercase
            if (index === -1) {
                alphabets = alphabets.toUpperCase();
                index = alphabets.indexOf(char);
            }

            // Construct new index
            let newIndex = index + key;

            // Check for range
            if (newIndex > 25) {
                newIndex %= 26;
            }

            const newChar = alphabets[newIndex];

            encrypted += newChar;

            // Convert alphabets back to lowercase
            alphabets = alphabets.toLowerCase();
        }
        return encrypted;
    }
    const finalKey = generateRandom();
    const finalStr = addText(string, finalKey);
    return {
        str: finalStr,
        key: finalKey
    }
}

const x = encrypt("-aHello there how are you"); // bza-B
console.log(x);




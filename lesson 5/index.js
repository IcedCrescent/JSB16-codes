// // Khai báo biến - Initialize
// // Chỉ làm lần đầu thôi
// let myName = "Trung"; // String

// let myAge = 23; // Number
// // Cong chuoi
// console.log("Tên tôi là " + myName);
// console.log("Tôi năm nay " + myAge + " tuổi");
// // Gán lại giá trị biến - Reassign
// myName = "Lan";
// myAge = 20;
// console.log("Tên tôi là " + myName);
// console.log("Tôi năm nay " + myAge + " tuổi");
// let quote = '"ABC"' // Dùng dấu ' '
// console.log(quote)
// // Dùng escape character
// quote = "\" ABC \""
// console.log(quote)
// // Dùng template string
// quote = `"ABC"`
// console.log(quote)
// console.log(`Tên tôi là ${myName}, năm nay ${myAge}`)
// console.log("Line 1\nLine2\n\n\nLine3")
// let namSinh = 1998;
// let age = 2021 - namSinh
// let somt  = 10 * (3 - 2) / ((32 + 4) /3)
// console.log("Tuoi " + age);

// let myName = prompt("What is your name?")
// alert(`Hello ${myName}`)
// let myAge = prompt("How old are you?");
// myAge = parseInt(myAge); // Biến string => number
// alert(`You were born in ${2021 - myAge}`)

let weight = parseFloat(prompt("Can nang"))
let height = parseFloat(prompt("Chieu cao?"))
let bmi = weight / (height * height)
alert(`BMI cua ban la ${bmi}`)
let isFemale = false
let isOver18 = true
// AND
// OR
// NOT
// let age = parseInt(prompt("Nhập tuổI của bạn"));
// if (age < 18) {
//     console.log("Chưa đủ tuổI lái xe")
// } else if (age < 21) {
//     console.log("Chưa đủ tuổi vào bar")
// } else if (age < 30) {
//     console.log("Quá trẻ để láy vợ")
// } else {
//     console.log("Già quá rồi")
// }

// ax^2 + bx + c

// let bmi = 17;
// if (bmi < 18) {
//     alert("Thieu can")
// } else if (bmi <= 24) {
//     alert("BT")
// } else {
//     alert("Thua can")
// }

let a = parseFloat(prompt("Tham so a"))
let b = parseFloat(prompt("Tham so b"))
let c = parseFloat(prompt("Tham so c"))
let delta = b*b - 4*a*c;

if (delta < 0) {
    alert("Vo nghiem")
} else if (delta == 0) {
    let x = -b / (2 * a);
    alert(`Nghiem kep: ${x}`);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2*a);
    let x2 = (-b - Math.sqrt(delta)) / (2*a);
    alert(`2 Nghiem phan biet`)
    alert(x1);
    alert(x2);
}
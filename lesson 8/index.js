// // CRUD
// // Create
// let names = ["Kien", "Minh", "Dat", "Duc"];
// let grades = [7, 8, 8, 9.5];
// // Read
// console.log(names[1]);
// console.log(grades.length); // "." dot operator
// console.log(grades[grades.length - 1]);
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i] + " - " + grades[i]);
// }
// let n = 0;
// while (n < names.length) {
//     console.log(names[n] + " - " + grades[n]);
//     n++;
// }
// // Update
// // Doi ten "Minh" thanh "Nhung"
// names[1] = "Nhung";
// console.log(names[1]);
// names.push("Minh");
// console.log(names);
// let newNames = ["Chau Anh", "Huu Minh"];
// names.push(...newNames); // "..." spread operator
// console.log(names);
// // Delete 
// // let deleted = names.splice(2, 3); // xoa bat dau tu vi tri 2, xoa 3 phan tu
// // console.log(names);
// // console.log("Deleted items: " + deleted);
// // names.splice(1);
// // console.log(names);

// let matrix = 
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
let nums = [];
// Hoi nguoi dung nhap lien tuc cac so 
// den khi nhap 0 thi dung
// Nhap 1 so: 10
// Nhap 1 so: 9
// Nhap 1 so: 0
// Cac so da nhap la: 10, 9

while (true) {
    let n = Number(prompt("Nhap 1 so (0 de dung):"));
    if (n === 0) {
        break;
    }
    nums.push(n);
}

alert("Nhap thanh cong " + nums.length + " phan tu");
alert(nums);
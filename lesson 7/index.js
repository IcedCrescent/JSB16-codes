
// let i = 0 (con chạy)
// i < 10 (điều kiện dừng)
// i++ (đơn vị tăng)
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log("end")
// let a = 0;
// for (let i = 10; i >= 0; i = i - 1) {
//     let b = 2;
//     a = a + i;
//     console.log(a);
// }

// while (lặp không biết trưỚc số lần kết thúc)

// let a = 10;
// while (a > 0) {
//     console.log(a);
//     a -= 1;
// }

// break: thoát vòng lặp ngay lập tức, bỏ qua các code còn lại trong vòng lặp
// continue: tiếp tục vòng lặp ngay lập tức, bỏ qua các code còn lại trong vòng lặp
// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         break;
//     }
//     console.log(i);
// }

// console.log("end")
let n = 0;
while (true) {
    n = Number(prompt("Nhap so lon hon 10"));
    if (n > 10) {
        break;
    }
    alert(`${n} khong lon hon 10`);
}
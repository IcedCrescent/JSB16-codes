// function: tập hợp code dùng đi dụng lại nhiều lần

// Declare a function
function sayHello() {
    console.log("Hello");
    // A lot code...
}


// function: keyword
// greeting: name of the function
// name: paramter/argument
/**
 * Print out "Hello " and the name of the person
 * @param {String} name of a person
 */
function greeting(name) {
    console.log("Hello " + name);
}

// JSDoc => /** ENTER
/**
 * Calculate the sum of 2 numbers
 * @param {Number} a first number
 * @param {Number} b second number
 * @returns sum of 2 numbers
 */
function add(a, b) {
    return a + b;
}

/**
 * In tu 1 toi n, neu n > 10 thi dung o 10  
 * @param {Number} n So lan in toi (10 la toi da)
 */
function printTo10Max(n) {
    for (let i = 1; i <= n; i++) {
        if (i > 10) {
            return; // thoat khoi ham luon
        }
        console.log(i);
    }
}

// Call the function
sayHello();

sayHello();

greeting("Nhung");
greeting("Kiên");

greeting();

let result = add(1, 2);
console.log(result);
console.log(add(-5, 10) * 2);

/**
 * Tinh gia tri ham so 2x^2 + 3x + 5
 * @param {Number} x Tham so truyen vao
 * @returns gia tri
 */
function ex1(x) {
    return 2 * x ** 2 + 3 * x + 5;
}

/**
 * Tìm nghiệm của PT bậc 2
 * @param {Number} a Tham so 1
 * @param {Number} b Tham so 2
 * @param {Number} c Tham so 3
 */
function quadraticEquation(a, b, c) {
    let delta = b**2 - 4 * a * c;
    if (delta < 0) {
        console.log("Vo nghiem");
    } else if (delta == 0) {
        let x = -b / (2 * a);
        console.log("Nghiem kep: " + x);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("2 Nghiem phan biet: ");
        console.log(x1);
        console.log(x2);
    }
}







let myName = "Dao Quang Trung";
myName = myName.toUpperCase(); // in hoa het
console.log(myName);

myName = myName.toLowerCase();
console.log(myName);

console.log(myName[4]); // lay ky tai vi tri thu 4

// lay chuoi con
console.log(myName.substring(4)); // lay tu vi tri thu 4 tro di
console.log(myName.substring(4, 9)); // lay tu vi tri thu 4, dung o truoc vi tri thu 9

console.log(myName.substr(4, 5)); // bat du tai vi tri thu 4, lay 5 ky tu sau do

// tach chuoi thanh mang con
let words = myName.split(" "); // tach chuoi thanh mang chua cac ky tu cach nhau
console.log(words);
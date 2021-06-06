// Object
// Dictionary (Python/C#), HashMap (Java)...
// key - value

// CRUD: Create - read - update - delete

// Create an object
let person1 = {
    name: "Trung",
    age: 23,
    "email": "trundq@mindx.edu.vn",
    isMale: true
};

// read an object
console.log("Name: " + person1.name);
console.log("Age " + person1["age"]); 

// update an object
person1["address"] = "Tay ho district"; // Add the address key
console.log(person1.address);
person1.age = person1.age + 1; // Update the age key
console.log(person1.age);


// delete a key
delete person1["email"]; 
console.log(person1.email);

person1["hobbies"] = ["game", "music"];
person1.grades = {
    "math": 6,
    "english": 7
};
console.log("math: " + person1.grades.math);
console.log(person1.hobbies[1]);
let persons = [];
persons.push(person1);
persons.push({
    name: "Nhung",
    isMale: false
});






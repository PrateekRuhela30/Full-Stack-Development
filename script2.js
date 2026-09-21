// Objects in JavaScript

let studentName = "John";
let studentAge = 20;
let studentBranch = "CSE";

let student = {
    name: "John",
    age: 20,
    branch: "CSE"
};
// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.branch);
// console.log(student["name"]);
// console.log(student["age"]);
// console.log(student["branch"]);
// console.log(student["studentBranch"]);   //undefined

// two cases wherer we need to access properties using student["propertyName"] syntax
// 1. when property name is stored in a variable
// console.log(student["full name"]);   //undefined

// let field = "studentBranch";
// console.log(student[field]);   //CSE

// student.age=21;   //updating value of age
// console.log(student);

// student["name"]="Doe";   //updating value of name
// console.log(student);

// student.city="New York";   //adding new property city
// student.specialization="AIML";   //adding new property specialization
// console.log(student);

// delete student.specialization;   //deleting property specialization
// console.log(student);
// console.log(student.roll);   //undefined

let student1 = {
    name: "Alice",
    address: {
        city: "Los Angeles",
        state: "California"
    }
};
console.log(student1.address.city);   //Los Angeles

let student2 = {
    name: "Leo",
    age: 22,
    isPass: true,
    address: {
        city: "New York",
        state: "New York"
    },
    subjects: ["HTML", "CSS", "JavaScript"],
    greet: function () {
        console.log("Hello, world ");
    }
};
console.log(student2);
student2.greet();   //Hello, world
console.log(student2.subjects[2]);   //JavaScript

let student3 = {
    name: "Alice",
    greet() {
        console.log(`Hello, world ${this.name}`);
    }
};
student3.greet();   //Hello, world Alice    

let counter = {
    count: 0,
    increment: function () {
        this.count++;
    },
    decrement: function () {
        this.count--;
    }
};
counter.increment();
counter.increment();
console.log(counter.count);   //2

console.log(Object.hasOwn(counter, "name"));   //false
console.log("count" in counter);   //true

console.log(Object.keys(student2));   //['name', 'age', 'isPass', 'address', 'subjects', 'greet']
console.log(Object.values(student2));   //['Leo', 22, true, {…}, Array(3), ƒ]
console.log(Object.entries(student2));   //[['name', 'Leo'], ['age', 22], ['isPass', true], ['address', {…}], ['subjects', Array(3)], ['greet', ƒ]]

const students = [
    {
        id: 1,
        name: "Alice",
        marks: 90
    },
    {
        id: 2,
        name: "Bob",
        marks: 85
    },
    {
        id: 3,
        name: "Charlie",
        marks: 95
    },
    {
        id: 4,
        name: "David",
        marks: 80
    }
];
console.log(students[0]);
console.log(students[0].name);

function greet(name) {
    console.log(name);
}

students.forEach(student => greet("Hello, " + student.name));

//object destructuring
let student4 = {
    name: "Alice",
    age: 20,
    branch: "CSE"
};
console.log(student4.name);
console.log(student4.age);

const { name, age, branch } = student4;
console.log(name);
console.log(age);
console.log(branch);

// do same with array destructuring
let arr3 = [1, 2, 3, 4, 5];
const [first, second, third] = arr3;
console.log(first);
console.log(second);
console.log(third); 
const firstname = "Joaquin";
const lastname = "Guevarra";

const age = 20;

const isStudent = true;
const isEmployed = false;

let hobbies = ["reading", "gaming", "coding", "traveling"];

let person = {
    firstname: firstname,
    lastname: lastname,
    age: age,
    isStudent: isStudent,
    isEmployed: isEmployed,
    hobbies: hobbies
};

function introduce() {
    alert(`Hello, my name is ${person.firstname} ${person.lastname}. I am ${person.age} years old.`);

    alert(`I am ${person.isStudent ? "a student" : "not a student"} and I am ${person.isEmployed ? "employed" : "unemployed"}.`);

    alert(`My hobbies include: ${person.hobbies.join(", ")}.`);
}
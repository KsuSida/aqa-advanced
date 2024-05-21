const person = {
    firstName: "Steve",
    lastName: "Jobs",
    age: 51
};
person.email = "steve.jobs@gmail.com";
delete person.age;

console.log(person);

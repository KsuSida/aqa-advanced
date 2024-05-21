const users = [
    {
        name: "Kate",
        email: "kate@gmail.com",
        age: 27
    },
    {
        name: "Peter",
        email: "peter@gmail.com",
        age: 25
    }
];
for (let val of users) {
    console.log(val);
};
for (const {name, email, age } of users) {
    console.log(`${name} is ${age} years old. Email is ${email}`);
};

const car1 = {
    brand: "Fiat",
    model: "500",
    year: 2024
};

const car2 = {
    brand: "Suzuki",
    model: "Vitara",
    owner: "Sida",
};
const car3 = {...car1, ...car2};
console.log(car3);

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]
const newArr = [].concat(numbersList); 
newArr.sort((a, b) => a > b ? 1 : -1);

console.log(numbersList);
console.log(newArr);

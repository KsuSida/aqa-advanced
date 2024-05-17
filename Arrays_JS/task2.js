const numbers = [1, 2, 3, 4, 5];
let mutation = new Array();

for (let i = 0; i < numbers.length; i++){
  let arrB = numbers.map((number) => number * i)
   mutation.push(arrB[i]);
};

console.log(mutation);


// option 2
let mut = numbers.map((num, index) => num * index);
console.log(mut);

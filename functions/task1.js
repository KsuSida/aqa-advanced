// function declaration
function area(width, height){
    return width * height;
};

console.log(area(5,10));

// fuction expression
const area1 = function(width, height){
    return width * height;
};

console.log(area1(3,15));

// arrow function expression
const area2 = (width, height) =>{
    return width * height;
};

console.log(area2(2,11));

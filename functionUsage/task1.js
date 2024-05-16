function handleNum(a,callback1,callback2){
    if (a % 2 === 0) {
return callback1(a)
    }
    if (a %2 !== 0) {
return callback2(a)
    }
};

function pow(number) {
    return number ** 2;
};

function twoPlus(num) {
    return num + 2;
};

console.log(handleNum(4, pow, twoPlus));
console.log(handleNum(15, pow, twoPlus));

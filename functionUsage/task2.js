function rec(num){
    console.log(num);
    while (num > 0) {
        return rec(num - 1);
    }
};

rec(35);

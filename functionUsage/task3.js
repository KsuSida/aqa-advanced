function divide(numerator, donominator){
    if (donominator === 0){
        throw Error("You cannot divide by Zero");
    }
    if (isNaN(numerator) === true || isNaN(donominator) === true ){
        throw new Error("You should use numbers as arguments of the function")
    } else{
        return numerator / donominator
    }
};

try {
    console.log(divide(20,0));
} catch (error) {
    console.error("There is an error:", error.message);
} finally {
    console.log("Робота завершена");
};

try { 
    console.log(divide(20,10));
} catch (error) {
    console.error("There is an error:", error.message);
} finally {
    console.log("Робота завершена");
};

try {
    console.log(divide(20,"I can"));
} catch (error) {
    console.error("There is an error:", error.message);
} finally {
    console.log("Робота завершена");
};

try {
    console.log(divide("I can",10));
} catch (error) {
    console.error("There is an error:", error.message);
} finally {
    console.log("Робота завершена");
};

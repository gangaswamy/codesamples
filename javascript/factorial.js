//recursion example
function factorial(num){
    if(num>1){
        console.log(num);
        return num * factorial(num-1);
    }else{
        console.log(num);
        return 1;
    }
}

console.log(factorial(5));

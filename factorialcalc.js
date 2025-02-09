function factorial(x) {
    answer = 1
    for (let index = 1 ; index <= x; index++) {
        answer*=index;
    }
    return answer
}

function fact_from_return(x){
    let arr = Array.from({ length: x }, (val, i) => i + 1);
    ans = arr.reduce((e, f)=>{
        return e*f
    })
    return ans
}

console.log(factorial(5));
console.log(fact_from_return(5))
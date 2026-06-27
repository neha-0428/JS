
function parameterizedSum(n, sum) {

    if (n < 1) {
        return sum;
    }


    return parameterizedSum(n - 1, sum + n)

}

console.log(parameterizedSum(3, 0));
console.log(parameterizedSum(5, 0));

function functionalSum(n) {

    if (n < 1) {
        return 0
    }

    return n + functionalSum(n - 1)
}

console.log(functionalSum(3));
console.log(functionalSum(5));


function factorial(n) {

    if (n < 1) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(3));
console.log(factorial(5));


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
        return n
    }



    return n + functionalSum(n - 1)
}

console.log(functionalSum(3));
console.log(functionalSum(5));
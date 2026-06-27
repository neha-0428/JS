
function fibonacciNums(n) {

    if (n <= 1) {
        return n
    }

    return fibonacciNums(n - 1) + fibonacciNums(n - 2)
}

console.log(fibonacciNums(7))
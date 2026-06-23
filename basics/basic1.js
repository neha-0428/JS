// Write a function calculateTotal(prices) that takes an array of numbers and returns their sum.

function calculateTotal(prices) {
    let sum = 0

    for (let i = 0; i < prices.length; i++) {
        sum += prices[i]
    }

    return sum;
}

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 2, 61, 4, 5]
console.log(calculateTotal(arr1))
console.log(calculateTotal(arr2))
console.log(calculateTotal([10, 20, 30]));
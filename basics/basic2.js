// Write a function getAdults(ages) that takes an array of ages 
// and returns a new array containing only ages that are 18 or above.

function getAdults(ages) {
    let adultAges = []

    for (let age of ages) {
        if (age >= 18) {
            adultAges.push(age)
        }
    }

    return adultAges
}

console.log(getAdults([2, 5, 8, 23, 6]))
console.log(getAdults([26, 51, 8, 23, 6]))
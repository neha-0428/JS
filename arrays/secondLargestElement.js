
function secondLargestElement(arr) {
    if (arr.length < 2) return undefined

    let largest = arr[0]
    let secondLargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]
        }
    }

    return secondLargest === -Infinity ? undefined : secondLargest
}


// let arr = [1, 5, 9, 3, 6, 8];
// let arr2 = [1];
// let arr3 = [];
// let arr4 = [1, 5, 9, 3, 3, 17, 8];
// let arr5 = [5, 5];
// console.log(secondLargestElement(arr))
// console.log(secondLargestElement(arr2))
// console.log(secondLargestElement(arr3))
// console.log(secondLargestElement(arr4))
// console.log(secondLargestElement(arr5))


function secondSmallestElement(arr) {
    if (arr.length < 2) return undefined

    let smallest = arr[0]
    let secondSmallest = Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest
            smallest = arr[i]
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i]
        }
    }

    return secondSmallest === Infinity ? undefined : secondSmallest
}

let arr = [1, 5, 9, 3, 6, 8];
let arr2 = [1];
let arr3 = [];
let arr4 = [1, 5, 9, 2, 3, 17, 8];
let arr5 = [5, 5];
console.log(secondSmallestElement(arr))
console.log(secondSmallestElement(arr2))
console.log(secondSmallestElement(arr3))
console.log(secondSmallestElement(arr4))
console.log(secondSmallestElement(arr5))
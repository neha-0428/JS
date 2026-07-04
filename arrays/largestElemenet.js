
function largestElement(arr) {
    if (arr.length === 0) return undefined;

    let largest = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }

    return largest

}

let arr = [1, 5, 9, 3, 6, 8];
let arr2 = [1];
let arr3 = [];
console.log(largestElement(arr))
console.log(largestElement(arr2))
console.log(largestElement(arr3))
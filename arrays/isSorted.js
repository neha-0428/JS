
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            return false
        }
    }

    return true
}

let arr = [1, 4, 2, 6, 7, 9]
let arr2 = [1, 2, 2, 6, 7, 9]
let arr3 = [1, 2, 2, 6, 1, 2]
let arr4 = []

console.log(isSorted(arr))
console.log(isSorted(arr2))
console.log(isSorted(arr3))
console.log(isSorted(arr4))
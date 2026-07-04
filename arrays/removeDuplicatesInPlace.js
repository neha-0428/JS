
function removeDuplicates(arr) {
    if (arr.length < 2) return arr

    let left = 0

    for (let right = 1; right < arr.length; right++) {
        if (arr[left] !== arr[right]) {
            arr[++left] = arr[right]
        }
    }

    arr.length = left + 1
    return arr

}

let arr = [1, 2, 2, 3, 3, 4, 5, 5, 8]
let arr1 = [1, 2, 3]
let arr2 = [1, 1, 6]
let arr3 = [1]
let arr4 = [1, 1]
let arr5 = []

console.log(removeDuplicates(arr))
console.log(removeDuplicates(arr1))
console.log(removeDuplicates(arr2))
console.log(removeDuplicates(arr3))
console.log(removeDuplicates(arr4))
console.log(removeDuplicates(arr5))
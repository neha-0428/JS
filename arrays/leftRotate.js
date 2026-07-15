
function leftRotateByOne(arr) {
    let temp = arr[0]

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1]
    }
    
    arr[arr.length - 1] = temp

    return arr

}

let arr = [1, 2, 3, 4, 5]
// console.log(leftRotateByOne(arr))

function leftRotateByK(arr, k) {
    let n = arr.length

    for (let i = 0; i < arr.length; i++) {
        let index = (k % n) + i
        if (index >= n) {
            index = n - index
        }

        // console.log(n , k , k % n)
        // console.log(i, index, 'index')

        let temp = arr[index]
        arr[index] = arr[i]
        arr[i] = temp
        
    }

    return arr
}

console.log(leftRotateByK(arr, 1))
// console.log(leftRotateByK(arr, 3))
// console.log(leftRotateByK(arr, 4))
// console.log(leftRotateByK(arr, 5))
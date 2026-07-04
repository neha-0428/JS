
function countSubsequences(index, result, arr, sum, currentSum, count) {

    if (index === arr.length) {
        if (currentSum === sum) {
            return 1
        }

        return 0
    }

    result.push(arr[index])    
    let leftCount = countSubsequences(index + 1, result, arr, sum, currentSum + arr[index], count)

    result.pop()
    
    let rightCount = countSubsequences(index + 1, result, arr, sum, currentSum, count)

    return leftCount + rightCount

}

let arr = [1, 2, 1]
let sum = 2
console.log(countSubsequences(0, [], arr, sum, 0, 0))
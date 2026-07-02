
function printSubsequence(index, result, arr, sum, currentSum) {

    if (index === arr.length) {
        if (currentSum === sum) {
            console.log(result)
        }

        return;
    }

    result.push(arr[index])
    printSubsequence(index + 1, result, arr, sum, currentSum + arr[index])

    result.pop()
    printSubsequence(index + 1, result, arr, sum, currentSum)

}

let arr = [1, 2, 1]
let sum = 2

printSubsequence(0, [], arr, sum, 0)

// Time complexity: O((2 raise to n) * n)
// Space complexity: O(n) 
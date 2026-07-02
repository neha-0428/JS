
function printSubsequence(index, result, arr, sum, currentSum) {

    if (index === arr.length) {
        if (currentSum === sum) {
            console.log(result)
            return true
        }

        return false
    }

    result.push(arr[index])
    if (printSubsequence(index + 1, result, arr, sum, currentSum + arr[index])) {
        return true;
    }

    result.pop()
    if (printSubsequence(index + 1, result, arr, sum, currentSum)) {
        return true
    }

    return false

}

let arr = [1, 2, 1]
printSubsequence(0, [], arr, 2, 0)
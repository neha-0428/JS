
function printSubsequences(index, result, arr) {

    if (index === arr.length) {
        console.log(result)
        return;
    }

    result.push(arr[index])
    printSubsequences(index + 1, result, arr)

    result.pop()
    printSubsequences(index + 1, result, arr)

}

let arr = [3, 1, 2]
printSubsequences(0, [], arr)


// Time complexity: for every index i have options (2) so => O((2 raise to n) * n)
// Space complexity: maximum depth of recursion can be n so O(n)
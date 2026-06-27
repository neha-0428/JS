
let arr = [1, 2, 3, 4, 5]

function reverse(i, n) {
    
    if (i === Math.trunc(n / 2)) {
        return arr
    }

    let temp = arr[n - i - 1]
    arr[n - i - 1] = arr[i]
    arr[i] = temp

    return reverse(i + 1, n)

}

console.log(reverse(0, arr.length))

// let str = 'abcdcba'
let str = 'nehakadam'
function palindrome(i, n) {

    if (i === Math.trunc(n/2)) {
        return true
    }


    if (str[i] !== str[n - i - 1]) {
        return false
    }

    return palindrome(i + 1, n)

}

console.log(palindrome(0, str.length))
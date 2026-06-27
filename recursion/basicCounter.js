
let count = 0
function counter(n) {

    if (count === n) {
        return;
    }

    
    console.log(++count);
    counter(n)
}

counter(5)
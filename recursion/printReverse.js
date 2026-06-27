
function printReverse(i, n) {

    if (i < 1) {
        return;
    }

    console.log(i--);
    printReverse(i, n)

}

printReverse(5, 5)
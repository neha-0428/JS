
// 1 - N
function printLinearly(n) {

    if (n < 1) {
        return;
    }


    printLinearly(n - 1)
    console.log(n)

}

console.log("print linearly");

printLinearly(3)

console.log();



// N - 1
function printReverse(n) {
    
    if (n < 1) {
        return
    }
    
    console.log(n);
    printReverse(n - 1)
    
}

console.log("print reverse"); 
printReverse(5)
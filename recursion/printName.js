
let count = 0
function printName(name) {
    if (count === 5) {
        return;
    }

    console.log(name);
    count++
    printName(name)


}

printName("Neha")
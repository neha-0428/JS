
let i = 1;
function print(n) {

    if (i > n) {
        return;
    }
    
    console.log(i++);
    print(n)



}

print(5)
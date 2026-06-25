
function print1(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = i; j > 0; j--) {
            process.stdout.write(String (j % 2))
        }
        console.log();
    }
}

// print1(5)

function print2(n) {
    for (let i = 1; i <= n; i++) {
        // for nums
        for (let j = 1; j <= i; j++) {
            process.stdout.write(String(j))
        }

        //for spaces
        for (let j = 1; j <= ((n - i) * 2); j++) {
            process.stdout.write(" ")
        }

        //for nums
        for (let j = i; j > 0; j--) {
            process.stdout.write(String(j))
        }

        console.log();
    }
}

// print2(4)

function print3(n) {
    let counter = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write(" " + String(counter++) + " ")
        }
        console.log();
    }
}

// print3(5)

function print4(n) {
    for (let i = 1; i <= n; i++) {
        for (let ch = 0; ch < i; ch++) {
            process.stdout.write(String.fromCharCode(65 + ch));
        }
        console.log();
        
    }
}

// print4(5)

function print5(n) {
    for (let i = n; i > 0; i--) {
        for (let ch = 0; ch < i; ch++) {
            process.stdout.write(String.fromCharCode(65 + ch))
        }
        console.log();
    }
}

// print5(5)

function print6(n) {
    for (let i = 0; i < n; i++) {
        for (j = 0; j <= i; j++) {
            process.stdout.write(String.fromCharCode(65 + i))
        }
        console.log();
    }
}

// print6(5)

function print7(n) {
    for (let i = 0; i < n; i++) {
        //for spaces
        for (let j = 0; j < (n - i - 1); j++) {
            process.stdout.write(" ")
        }

        //for chars
        for (let j = 0; j <= i; j++) {
            process.stdout.write(String.fromCharCode(65 + j))
        }

        //for reverse chars
        for (let j = i; j > 0; j--) {
            process.stdout.write(String.fromCharCode(64 + j))
        }

        console.log();   
    }
}

// print7(5)

function print8(n) {
    for (let i = n; i > 0; i--) {
        for (let j = i-1; j < n; j++) {
            process.stdout.write(String.fromCharCode(65 + j))
        }
        console.log();
    }
}

print8(5)
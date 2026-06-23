
function print1(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            process.stdout.write(' * ') // prints on single line
        }
        console.log()
    }
}

// print1(5)

function print2(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write(' * ')
        }
        console.log()
    }
}

// print2(5)

function print3(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(String (j))
        }
        console.log()
    }
}

// print3(5)

function print4(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(String (i))
        }
        console.log()
    }
}

// print4(5)

function print5(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            process.stdout.write(' * ')
        }
        console.log()
    }
}

// print5(5)

function print6(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(String (j))
        }
        console.log();
    }
}

// print6(5)

function print7(n) {
    for (let i = 0; i < n; i++) {

        //for spaces
        for (let j = 0; j < n - i - 1; j++) {
            process.stdout.write(' ');
        }

        // for stars
        for (let j = 0; j < (2 * i + 1); j++) {
            process.stdout.write('*')
        }

        // for spaces
        for (let j = 0; j < n - i - 1; j++) {
            process.stdout.write(' ')
        }

        console.log()
    }
}

// print7(5)

function print8(n) {
    for (let i = n; i > 0; i--) {

        // for spaces
        for (let j = 0; j < (n - i); j++) {
            process.stdout.write(' ')
        }

        // for stars
        for (let j = 0; j < (2 * i - 1); j++) {
            process.stdout.write('*')
        }

        // for spaces
        for (let j = 0; j < (n - i); j++) {
            process.stdout.write(' ')
        }

        console.log();
    }
}

// print8(5)

function print9(n) {
    // 1st triangle
    for (let i = 0; i < n; i++) {
        //for spaces
        for (let j = 0; j < (n - i - 1); j++) {
            process.stdout.write(' ')
        }

        //for stars
        for (let j = 0; j < (2 * i + 1); j++) {
            process.stdout.write('*')
        }

        //for spaces
        for (let j = 0; j < (n - i - 1); j++) {
            process.stdout.write(' ')
        }

        console.log()
    }

    // 2nd triangle
    for (let i = n-1; i > 0; i--) {
        // for spaces
        for (let j = 0; j < (n - i); j++) {
            process.stdout.write(' ')
        }

        // for stars
        for (let j = 0; j < (2 * i - 1); j++) {
            process.stdout.write('*')
        }

        //for spaces
        for (let j = 0; j < (n - i); j++) {
            process.stdout.write(' ')
        }

        console.log();
    }
}

// print9(5)

function print10(n) {
    // 1st traingle
    for (let i = 0; i < n; i++) {

        // for stars
        for (let j = 0; j <= i; j++) {
            process.stdout.write('*')
        }

        // for spaces
        for (let j = 0; j < (n - i - 1); j++) {
            process.stdout.write(' ')
        }

        console.log();
    }

    // 2nd triangle
    for (let i = n - 1; i > 0; i--) {
        // for stars
        for (let j = 0; j < i; j++) {
            process.stdout.write('*')
        }

        // for spaces
        for (let j = 0; j < (n - i); j++) {
            process.stdout.write(' ')
        }

        console.log();
    }
}

// print10(5)


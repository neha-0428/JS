// Write a function getUsernames(users) that takes an array of User Objects 
// and returns a new array containing only the usernames as strings.

function getUsernames(users) {
    let usernames = []

    for (let user of users) {
        usernames.push(user.username)
    }

    return usernames

}

let userData = [
    {
        username: 'Neha',
        age: 23
    }, 
    {
        username: 'yash',
        age: 21
    },
    {
        username: 'Shubhra',
        age: 13
    },
    {
        username: 'rohan',
        age: 19
    }
]

const databaseUsers = [
    { id: 1, username: "neha_dev", role: "admin" },
    { id: 2, username: "amit_99", role: "user" },
    { id: 3, username: "rahul_coder", role: "user" }
];

console.log(getUsernames(userData))
console.log(getUsernames(databaseUsers))
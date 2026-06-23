// Write a function findOldestUser(users) that takes an array of user objects 
// and returns the entire user object of the person with the highest age.

function findOldestUser(users) {
    let oldestUser = users[0]

    for (let user of users) {
        
        if (user.age > oldestUser.age) {
            oldestUser = user
        }
    }

    return oldestUser

}

const companyUsers = [
    { username: "neha", role: "admin" , age: 21},
    { username: "amit", role: "user", age: 52 },
    { username: "rahul", role: "user", age: 45 },
    { username: "priya", role: "moderator", age: 13 },
    { username: "vikram", role: "user", age: 8 }
];

console.log(findOldestUser(companyUsers))
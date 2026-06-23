// Write a function getAdminUsernames(users) that takes the same array of user objects 
// but returns a new array containing the usernames of ONLY the users whose role is "admin".

function getUsernames(users) {
    let adminUserNames = []

    for (let user of users) {
        if (user.role === 'admin') {
            adminUserNames.push(user.username)
        }
    }

    return adminUserNames
}

const databaseUsers = [
    { id: 1, username: "neha_dev", role: "admin" },
    { id: 2, username: "amit_99", role: "user" },
    { id: 3, username: "rahul_coder", role: "user" }
];

console.log(getUsernames(databaseUsers))
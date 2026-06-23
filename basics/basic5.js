// Write a function countRoles(users) that takes an array of user objects 
// and returns an object showing the total count of each role.

function countRoles(users) {
    let roleCounts = {}

    for (let user of users) {

        let role = user.role;

        // roleCounts[role] = (roleCounts[role] + 1) || 1
        roleCounts[role] = (roleCounts[role] ?? 0) + 1
    }

    return roleCounts
}

const companyUsers = [
    { username: "neha", role: "admin" },
    { username: "amit", role: "user" },
    { username: "rahul", role: "user" },
    { username: "priya", role: "moderator" },
    { username: "vikram", role: "user" }
];

console.log(countRoles(companyUsers));

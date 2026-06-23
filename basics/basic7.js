// Write a function groupUsersByRole(users) that takes an array of user objects 
// and groups the users into arrays categorized by their role.


function groupUsersByRole(users) {
    let result = {}

    for (let user of users) {
        let role = user.role

        result[role] = (result[role] ?? []);
        
        result[role].push(user)
    }

    return result
}


const team = [
    { username: "neha", role: "admin" },
    { username: "amit", role: "user" },
    { username: "rahul", role: "user" },
    { username: "priya", role: "moderator" }
];

console.log(groupUsersByRole(team))
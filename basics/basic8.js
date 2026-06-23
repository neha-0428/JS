// Write a function getProjectAllocations(departments) that traverses a 
// deeply nested company layout and returns a flat object counting 
// how many developers are assigned to each project.

function getProjectAllocations(departments) {
    let result = {}

    for (let department of departments) {
        
        let developers = department.developers

        for (let developer of developers) {
            
            let project = developer.project

            result[project] = (result[project] ?? 0) + 1
            
        }
    }

    return result

}

const companyStructure = [
    {
        department: "Engineering",
        developers: [
            { name: "Neha", project: "E-Commerce" },
            { name: "Amit", project: "Analytics Platform" }
        ]
    },
    {
        department: "Core Infra",
        developers: [
            { name: "Rahul", project: "Analytics Platform" },
            { name: "Priya", project: "Security Service" },
            { name: "Vikram", project: "E-Commerce" }
        ]
    }
];

console.log(getProjectAllocations(companyStructure))
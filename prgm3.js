const employee = {name: "Afroz", role: "Developer", age: 28, location: "IN"}

function updateEmpDetails(employee,newrole){
    return {...employee,role:newrole};
}

console.log(updateEmpDetails(employee,"Manager"))
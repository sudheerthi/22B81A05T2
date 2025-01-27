const userDetails = {name: "CVR", age: 25}
const userAddress = {address: "Mangalpally", city: "Hyderabad"}
const userPreferences = {theme: "Engineering Edu", language: "EN"}

function mergeUserData(...args){
    return {
        ...args
    };
}

console.log(mergeUserData(userDetails, userAddress, userPreferences));
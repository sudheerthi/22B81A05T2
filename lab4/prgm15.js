const user = {
    name: 'John',
    age: 25,
    interests: ['Reading', 'Traveling', 'Cooking']
};
function createProfile({ name, age, interests }) {

    const [primaryInterest, secondaryInterest] = interests;

    return {
        name,
        age,
        primaryInterest,
        secondaryInterest
    };
}

console.log(createProfile(user));
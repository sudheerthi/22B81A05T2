function createProfile(Obj){
    let {name,email}=Obj;
    let newObj ={
        name,email
    }
    return newObj;
}
const Obj = {
    name:"sudheerthi",
    age: 25,
    email:"s@gmail.com",
    address:{
        street:"street1",
        city:"city1",
        state:"state1",
    }
}

console.log(createProfile(Obj));
const product = {id: 101, name: "Laptop", price: 1000, category:"Electronics"}

function updatePrdtInfo(product){
    let {id,name} = product;
    return{
        id,
        name,
        discount: 10, 
        inStock: true
    }
}
console.log(updatePrdtInfo(product));
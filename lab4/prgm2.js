
function calTotal(sum,...nums){
    return "sum = "+nums.reduce((total,num)=>total+num,0);
}

console.log(calTotal("sum",10,20,30,40,50));
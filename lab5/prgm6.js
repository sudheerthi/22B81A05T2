let p1 = new Promise((resolve,reject) => {
    resolve(5);
})
let p2 = new Promise((resolve,reject) => {
    resolve(10);
});
let p3 = new Promise((resolve,reject) => {
    resolve(15);
});

Promise.all([p1,p2,p3]).then((response)=>{
    const sum = response.reduce((all,curr)=>all+curr,0);
    console.log(sum);
}).catch((error)=>{console.log(error)});

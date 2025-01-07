const colors = ["red","green","blue","yellow"];

let [c1,,c3] = colors;
let [,c2,,c4] = colors;
console.log(c1,c3);
console.log(c2,c4);
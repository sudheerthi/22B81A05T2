function greet(name,callback){
    console.log("hello",name);
    callback();
}
function displaying(){
    console.log("displaying from callback message");
   
}

greet("sudheerthi",displaying);

const events = require('events');

const emitter = new events();

emitter.once("UserDetails",(name,age)=>{
    console.log(`"Hello, ${name}! You are ${age} years old."`);
})

emitter.emit("UserDetails","sudheerthi",20)
emitter.emit("UserDetails","sudheerthi",20)

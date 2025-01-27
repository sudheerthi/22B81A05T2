function delayedMessage(message, delay,callback) {
    setTimeout(()=>{
        console.log(message);
    },delay);
    callback();
}

function displaying(){
    console.log("message is displayed");
}

delayedMessage("delayed message",2000,displaying)

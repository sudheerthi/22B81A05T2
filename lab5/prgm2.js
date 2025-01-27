function mul(num,callback){
    let res = num*2;
    callback(res);
}

function sub(num,callback){
    let res = num-3;
    callback(res);
}

function add(num,callback){
    let res = num+10;
    callback(res);
}

let finalRes = (num) => {
    mul(num,(res1) => {
        sub(res1,(res2) => {
            add(res2,(res3) => {
                console.log(res3);
            });
        });
    });
}

finalRes(50);

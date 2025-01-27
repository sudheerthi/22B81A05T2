function fetchDataWithCallback(success,callback){
    setTimeout(()=>{
        if(success){
            callback(null,"data fetched successfully...!");
        }
        else{
            callback("Error:unable to fetch",null);
        }
    },2000);
}

function handleResponse(error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
}

fetchDataWithCallback(true,handleResponse);
fetchDataWithCallback(false,handleResponse);

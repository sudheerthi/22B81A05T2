function fetchData(url){
    return new Promise((resolve, reject) => {
        if(url.includes(`error`)){
            reject('Error in URL');
        }
        else{
            resolve("data is fetched successfully");
        }
    });
}

fetchData("https://example.com").then(Response=>{console.log(Response)}).catch(error => console.log(error));
fetchData("https://example.com/error").then(Response=>{console.log(Response)}).catch(error => console.log(error));

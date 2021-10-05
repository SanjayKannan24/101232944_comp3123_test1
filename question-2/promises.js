const resolvedPromise = () => {
    let promise = new Promise((resolve , reject) => {
        let success = {"message " : "Delayed Success!"}
        setTimeout(resolve(success) , 500);
    })
    return promise;
} 

const rejectedPromise = () => {
    let promise = new Promise((resolve , reject) => {
        let error = {"message " : "Delayed Exception!"}
        setTimeout(reject(error) , 10000);
    })
    return promise;
} 

resolvedPromise().then((output) => {
    console.log(output);
    return rejectedPromise();
}).catch((output) => {
    console.log(output);
})    
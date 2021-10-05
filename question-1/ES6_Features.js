const mixedArray = ['PIZZA', 10 , true , 25 , false , 'Wings'];
let output = [];
let lowerCaseWords = (input) => {
    let promise = new Promise((resolve , reject) => {
        if(input.length != 0){
            for(i of input){
                if(isNaN(i) && typeof i != 'boolean'){
                    output.push(i.toLowerCase());
                    resolve(output);
                }
            }
        }
        else{
            reject("Oh no! It's failed");
        }
    })
    
    promise.then((result) => {
        console.log(result);
    }).catch((result) => {
        console.log(result);
    })
} 

lowerCaseWords(mixedArray);

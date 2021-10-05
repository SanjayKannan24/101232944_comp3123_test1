const fs = require('fs');

let dir_name = "logs";
const dir = './question-3/' + dir_name;
const file_Path = './question-3/logs/'

try{
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        console.log("Directory " + dir_name + " is Created");

        for(i = 0 ; i < 10 ; i++){
            fs.appendFile(file_Path + 'log'+ i + '.txt' , 'This is file ' + i , (err) => {
                if(err){
                    throw err;
                }
            })
            console.log("log" + i + ".txt");
        }
    }
    else{
        console.log("The directory is existed");
    } 
}
catch(err){
    console.log(err);
}
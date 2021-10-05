const fs = require('fs');
const path = require('path');

let dir_name = "logs";
const dir = "./question-3/" + dir_name;
const file_Path = "./question-3/" + dir_name + "/";

try{
    if(fs.existsSync(dir)){
        fs.readdir(dir , (err , files) => {
            if(err){
                throw err;
            }
            else{
                for(i of files){
                    console.log(i + " is deleted.");
                    fs.unlinkSync(file_Path + i)
                }
            }
        })
        fs.rmdir(dir , {recursive : true} , (err) => {
            if(err){
                throw err;
            }
            console.log("The directory ---" + dir_name + "--- is deleted");
        });
    }
    else{
        console.log("There is no such a directory called ---" + dir_name + "---");
    }
}
catch(err){
    console.log(err);
}

import fs from "fs"


const directory:string = 'C:/Users/Harry Tai/tecky-exercises/Testing/WSP/WSP003'

console.log(directory)


function readDirPormise(directory:string){
    return new Promise<string[]>(function(resolve, reject){
        fs.readdir(directory,function(err, files){
            if(err){
                reject(err);
                return
            }
            resolve(files)
        })
    })
}

function readFilePromise(file:string){
    return new Promise<Buffer>(function(resolve, reject){
        fs.readFile(file,(err, content)=>{
            if(err){
                reject(err)
                return
            }
            resolve(content)
        })
    })
}

function writeFilePromise(output:string, content:string, option?:{flag:string}){
    return new Promise<void>((resolve,reject)=>{
        fs.writeFile(output, content, {flag:'a'}, (err)=>{
            if(err){
                reject(err);
                return;
            }
        })
    })
}


readDirPormise(directory).then((X)=>{
    X.forEach((content)=>{
        readFilePromise(content).then((Y)=>{
            const foundContent = Y.toString()
            const lines = foundContent.split("\n")
            const contentToWrite = `File (${content}) : Content is ${lines[3]} \n`
            writeFilePromise('output.txt', contentToWrite,{flag:'a'}).catch((err)=>{
                console.log(err)
            })
        
        })
        .catch((err=>{
            console.log(err)
        }))
    })

})






import fs from "fs"


const directory: string = 'C:/Users/Harry Tai/tecky-exercises/Testing/WSP/WSP003'

const filesList: string[] = fs.readdirSync(directory)

console.log('Readdirsync: ', filesList)
console.log('----Sync Version last print----')



// for(let content of fs.readdirSync(directory) ){
//     filesList.push(content)
// }


// console.log('Readdirsync: ',filesList)

//=============================================================================


// const filesList2: string[] = []


// fs.readdir(directory, function (error, content: string[]) {

//     if (error) {
//         console.log("[ERROR]: ");
//         console.log(error);
//         return;
//     }
//     filesList2.push(content.toString())

//     console.log('Readdir call back: ', content)    

// })

// console.log('Readdir call back outside print: ', filesList2)

// console.log('----Call Back last print----')


const filesList2: string[] = []

async function run() {

    
    fs.readdir(directory, function (error, content: string[]) {

    if (error) {
        console.log("[ERROR]: ");
        console.log(error);
        return;
    }
    filesList2.push(content.toString())

    
       

})

}
run().then(console.log)
 

console.log('----Call Back last print----')






//=====================================

function syncFunction(dir: string) {

    new Promise<string>(function (resolve, reject) {
        fs.readdir(dir, (err, files) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(files.toString());


        })
    }).then((promiseResult) => {
        console.log('Readdir async function: ', [promiseResult])
    })

}

syncFunction(directory)

console.log('----promise then last print----')


import fs from "fs";

// function add(a: number, b: number): number {
//     return a + b;
// }

// function reduce(a:number, b:number):number{
//     return a-b;
// }

// function readDir(location:string){
//     console.log(fs.readdirSync(location))

// }





fs.readdir(__dirname, function (error, content: string[]) {

    if (error) {
        console.log("[ERROR]: ");
        console.log(error);
        return;
    }
   

    console.log('Readdir call back: ', content)    

})

// function runIt(dir:string,inputF:Function) {
//     inputF(dir)  
    
// }


// runIt(__dirname,readDir)


console.log('this is last line');
import express from "express";
import type { Request, Response} from "express";
// import path from "path";
// import expressSession from "express-session";

const app = express();



// print the access massage
app.use((req, res, next) => {
  console.log(`ip: ${req.ip} accessed the path: ${req.path} by method: ${req.method}`);
  next();
});


app.get('/',(req:Request,res:Response)=>{
    res.send('~response~')    

})


const port = 8080;

app.listen(port, ()=>{
    console.log('server started')
})



import express from "express";
import type { Request, Response, NextFunction } from "express";
import path from "path";
import expressSession from "express-session";

const app = express();

const port = 8080;

app.listen(port, ()=>{
    console.log('server started')
})

app.get('/',(req:Request,res:Response)=>{
    res.send('~response~')
    

})



import express from "express";
// import jsonfile from "jsonfile";
// import type { Request, Response } from "express";
// import { logger } from "../logger";
// import path from "path";
// import { Product } from "../models";

// const PRODUCT_JSON_PATH = path.join(__dirname, "..", "data", "products.json");
export const testRoutes2 = express.Router();



testRoutes2.get('/g', (req,res)=>{
    res.send('  request GET 1 received')
})

testRoutes2.get('/h', (req,res)=>{
    res.send('  request GET 2 received')
})


testRoutes2.post('/get',(req,res)=>{
    res.send(' request POST 1 received')
})

import express from "express";
// import jsonfile from "jsonfile";
// import type { Request, Response } from "express";
// import { logger } from "../logger";
// import path from "path";
// import { Product } from "../models";

// const PRODUCT_JSON_PATH = path.join(__dirname, "..", "data", "products.json");
export const testRoutes1 = express.Router();



testRoutes1.get('/get', (req,res)=>{
    res.send('  request GET received')
})

testRoutes1.post('/get',(req,res)=>{
    res.send(' request POST 1 received')
})

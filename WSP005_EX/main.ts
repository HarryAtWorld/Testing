
import express from "express";
// @ts-ignore-start
import type { Request, Response, NextFunction } from "express";
// @ts-ignore-end
// @ts-ignore-start
import path from "path";
// @ts-ignore-end
import expressSession from "express-session";




const app = express();



// make cookies ?
app.use(
   
    expressSession({
        secret: "Harry",
        resave: true,
        saveUninitialized: true,
        name:"Harry Website's Cookie"
    })

)


// print the access massage
app.use((req, res, next) => {
    console.log(`ip: ${req.ip} accessed the path: ${req.path} by method: ${req.method}`)
    next()

})




app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'testing/test.html'))
    // const name = req.session['name'];
    

    if (req.session['name']) {

        req.session[`visitCount`] += 1;

        // res.sendFile(path.join(__dirname, 'index.html'))
        res.send(`唔係第一次來 ${req.ip} \n visit count: ${req.session[`visitCount`]}`)
        console.log("print session:",req.session, "sessionID:",req.sessionID)

        
        
        
        
        
    } else{
        
        console.log("print session:",req.session, "sessionID:",req.sessionID)
        req.session[`name`] = req.ip;
        req.session[`visitCount`] = 0;
        res.send(`You are 1st time to this website ${req.ip} visit count: ${req.session[`visitCount`]}`)
        
    }   

    

})


// set the port number
const port = 8080;

app.listen(port, () => {
    console.log(`server started, Port: ${port}`)
})

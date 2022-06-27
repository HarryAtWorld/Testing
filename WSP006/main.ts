
import express from "express";

// import type { Request, Response, NextFunction } from "express";

// import path from "path";

// import expressSession from "express-session";
import formidable from "formidable"
// import fs from "fs";


const app = express();

const location = 'public2'
// fs.mkdirSync(location, { recursive: true })
const form = formidable({
    uploadDir:location,
    keepExtensions: true,
    maxFiles: 1,
    maxFileSize: 200 * 1024 ** 2, // the default limit is 200KB
    filter: part => part.mimetype?.startsWith('image/') || part.mimetype?.startsWith('application/pdf') || false,
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// make cookies ?
// app.use(

//     expressSession({
//         secret: "Harry",
//         resave: true,
//         saveUninitialized: true,
//         name: "Harry Website's Cookie"
//     })

// )



// app.use((req, res, next) => {
//     console.log(`ip: ${req.ip} accessed the path: ${req.path} by method: ${req.method}`)

//     console.log(req.params)


//     res.send(`request  = : ${req.params}`)

// })


// app.get("/name/:name/:location", (req, res) => {
//     console.log("two");
//     const name = req.params.name;
//     const location = req.params.location;
//     res.end(`Name is ${name}, Location is ${location}`);
//   });


// app.post('/submit', (req, res) => {

//     console.log('1st print', req.body)

    


//     form.parse(req, (err, fields, files) => {
//         console.log({ err, fields, files })

//         // res.send(fields)
//     })

//     res.send(req.body)


// })


// app.get('/submit', (req, res) => {
//     // res.sendFile(path.join(__dirname, 'testing/test.html'))
//     // const name = req.session['name'];


//     console.log(req.body)

//     // form.parse(req, (err, lastName) => {
//     //     console.log({ lastName })


//     // })


//     // if (req.session['name']) {

//     //     req.session[`visitCount`] += 1;

//     //     // res.sendFile(path.join(__dirname, 'index.html'))
//     //     res.send(`唔係第一次來 ${req.ip} \n visit count: ${req.session[`visitCount`]}`)
//     //     console.log("print session:",req.session, "sessionID:",req.sessionID)


//     // } else{

//     //     console.log("print session:",req.session, "sessionID:",req.sessionID)
//     //     req.session[`name`] = req.ip;
//     //     req.session[`visitCount`] = 0;
//     //     res.send(`You are 1st time to this website ${req.ip} visit count: ${req.session[`visitCount`]}`)

//     // }   


// })

app.use((req,res,next)=>{
    console.log(`ip: ${req.ip} accessed the path: ${req.path} by method: ${req.method}`)
    next()
})
app.use(express.static('public2')) // allow client to directly get the files by enter the file name at address bar without setting a middleware to allow,
app.use(express.static('public'))  // it will find the requested file at location and by the sequency of the express.static order. if it found the file it wanted, then it will stop searching next location. 


// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'public/index.html'))
    
// })



// app.post('/submit',(req,res)=>{

//     console.log('this is post submit')

//     const feedBack:any ={}

//     feedBack.text = 'this is feedback text'
//     feedBack.firstName = req.body.firstName
//     feedBack.lastName = req.body.lastName
//     feedBack.image = 'test.png'


//     console.log(req.body)
    
//     res.json(feedBack)
    
    
// })


app.post('/submit',(req,res)=>{

    console.log('this is post submit')

    form.parse(req, (err, fields, files) => {
        console.log({ err, fields, files })
        
        res.json({feedback:'uploaded'})
      })

    
  

    


  
    
    
})


const port = 8080;

app.listen(port, () => {
    console.log(`server started, Port: ${port}`)
})

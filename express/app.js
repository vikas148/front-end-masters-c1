const express=require("express");
const fs= require("fs");
const path= require("path");
const app = express();
const port =80;

//express stuff
app.use('/static',express.static('static')) //serving static files

app.use(express.urlencoded())

//PUG stuffs
app.set('view engine','pug') //set the template engine
app.set('views',path.join(__dirname,'views'));  //set the view directory
// console.log(__dirname);
//our pug demo endpoint
// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo',{title: 'hey asshole ', message: 'hello there mutherfucker did you used pug'})
// })

// app.get("/",(req, res)=>{
// res.send("this is homepage of  my first express app with harry bahi")
// });
// app.get("/about",(req, res)=>{
// res.status(200).send("this is about page of  my first express app with harry bahi")
// });
// app.get("/contact",(req, res)=>{
// res.send("this is contact page my first express app with harry bahi")
// });

// app.post("/contact",(req, res)=>{
// res.send("this is post request of  contact page my first express app with harry bahi")
// });
// app.post("/this",(req, res)=>{
// res.status(404).send("This page is not found ")
// });

//endpoints
app.get('/',(req,res )=>{
    const con="best um best content on internet"
    const parms ={'title': 'Pubg is the best game','content': con}
res.status(200).render('index.pug',parms)
})


app.post('/',(req,res)=>{
//   console.log(req.body);
   name=req.body.name;
    age=req.body.age;
    gendder=req.body.gender;
    address=req.body.address;
    more=req.body.more;
    let outputtowrite=`the name of the client is ${name} , ${age} yeaars old , ${gendder} , living at ${address} , more about him ${more}`
    fs.writeFileSync('output.txt',outputtowrite)
     const parms ={'message': 'your form is submited'}
    res.status(200).render('index.pug',parms)
})
//start the server

app.listen(port,()=>{
    console.log(`The application started sucessfully on port ${port}`);
})
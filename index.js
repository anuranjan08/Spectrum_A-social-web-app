const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;

//reading through POST request
app.use(express.urlencoded());

//setting up cookie parser
app.use(cookieParser());

//use express router
app.use('/',require('./routes'));


//setting up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error in loading the server :${err}`);
    }
    console.log(`Server is running at port: ${port}`)

})
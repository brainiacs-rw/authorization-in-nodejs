const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config({path: './config/.env'});
const app = express();
const dbConnection = require('./config/db_connection');

//requiring user routes 
const {userRoutes}=require("./routes/userRoutes");

//swagger conf
const swaggerUi = require('swagger-ui-express'),swaggerDocument = require('./swagger.json');

//running db connection function
dbConnection();

//used middlewares
app.use(bodyParser.json());
app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);
app.use("/user",userRoutes);



//CRUD
//C: create httpMethod: post, 
//R: read httpMethod: get,
//U: update httpMethod: put,
//D: delete httpMethod: delete, 

app.get("/",(req,res)=>{
  return  res.send("welcome to brainiacs")
});



app.listen(process.env.PORT,()=>{
  console.log("Runining...........");
});

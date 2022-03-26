import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from'cors';

import experimentRouter from './routes/experiments.js'
const app = express();



app.use(bodyParser.urlencoded({ limit: "30mb", extended:true}))
app.use(bodyParser.json({ limit: "30mb", extended:true}))
app.use(cors())

app.use('/experiments',experimentRouter)

const CONNECTION_URL = 'mongodb+srv://doorstepsmastery:doorstepsmastery123@cluster0.sy8bw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => app.listen(PORT,() =>console.log(`server running`)))
    .catch((e) => console.log(e.message)); 

//  mongoose.connect(CONNECTION_URL).then(()=>{console.log('...',)})

// mongoose.set(`useFindAndModify`,false)
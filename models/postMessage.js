import mongoose from "mongoose";

const postScheme = mongoose.Schema({
    exprerimentsId:String,
    responseId:String,
    answers:[{
        questionId:String,
        questionName:String,
        answer:String
    }]
})
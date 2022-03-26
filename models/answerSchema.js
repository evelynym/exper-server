import mongoose from "mongoose";

const answerSchema = mongoose.Schema({
    experimentName:String,
    answers:[{
        question:String,
        answer:String
    }]
})

const Answer = mongoose.model('Answer',answerSchema);

export default Answer;
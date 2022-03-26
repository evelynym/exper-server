import mongoose from "mongoose";

const answerSchema = mongoose.Schema({
    experimentName:String,
    answers:[{
        questionId: [mongoose.Schema.Types.ObjectId],
        question:String,
        answer:String
    }]
})

const Answer = mongoose.model('Answer',answerSchema);

export default Answer;
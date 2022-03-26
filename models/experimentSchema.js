import mongoose from "mongoose";

const experimentSchema = mongoose.Schema({
    experimentName:String,
    questions:[{
        questionName:String,
        questionType:String,
        questionOptions:{
            type:[String],
            default:[]
        }
    }]
})

const Experiment = mongoose.model('Experiment',experimentSchema);

export default Experiment;
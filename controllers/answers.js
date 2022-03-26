import Answer from "../models/answerSchema.js";

export const SubmitAns = async (req, res) => {
    const getAns = req.body;
    const newAns = new Answer({
        experimentName:getAns.experimentName,
        answers:getAns.answers
    })

    try {
        await newAns.save();
        res.status(201).json(newAns)
   } catch (error) {
        res.status(409).json({message:error.message})
   }
}
import Experiment from "../models/experimentSchema.js";

export const getExperiments = async(req,res) => {
    try {
        const experiments = await Experiment.find();
        console.log(experiments)
        res.status(200).json(experiments)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const CreatExperiment = async (req,res) => {
    const experiment =req.body;
    const newExperiment = new Experiment({
        "experimentName":experiment.experimentName,
        "questions": experiment.questions
    })
    console.log(experiment);
    console.log(newExperiment);
   try {
        await newExperiment.save();
        res.status(201).json(newExperiment)
   } catch (error) {
        res.status(409).json({message:error.message})
   }
}

export const FetchExperimentByName = async (req, res) => {
    const name = req.params.name;
    try {
        const singleExperiment = await Experiment.findOne({experimentName: name});
        res.status(200).json(singleExperiment);
    } catch (error) {
        res.status(500).json({message: error});
    }
}
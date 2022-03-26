import mongoose from "mongoose";
import Experiment from "../models/experimentSchema.js";

export const getExperiments = async(req,res) => {
    try {
        const experiments = await Experiment.find();
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

export const DeleteExperimentById = async (req,res) => {
    const {id} = req.params;
    console.log(id);
    try {
         if(!mongoose.Types.ObjectId.isValid(id)) 
             return res.status(404).send('No experiment with that Id');
        await Experiment.findByIdAndRemove(id);
        res.status(200).json('delete successfully');

    } catch (error) {
        res.status(409).json({message:error.message})
    }
}


import express from "express";
import {
  getExperiments,
  CreatExperiment,
  FetchExperimentByName,
  DeleteExperimentById,
  IsExistsExperimentByName,
  UpdateExperiment,
} from "../controllers/experiments.js";

const router = express.Router();

router.get("/", getExperiments);
router.post("/createExperiment", CreatExperiment);
router.get("/fetchExperimentByName/:name", FetchExperimentByName);
router.delete("/delete/:id", DeleteExperimentById);
router.get("/isExistsExperimentByName/:name", IsExistsExperimentByName);
router.patch("/updateExperiment/:id", UpdateExperiment);

export default router;

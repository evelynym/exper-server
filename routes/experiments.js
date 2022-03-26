import express from 'express'
import { getExperiments,CreatExperiment, FetchExperimentByName } from '../controllers/experiments.js';
import { SubmitAns } from '../controllers/answers.js';

const router = express.Router();

router.get('/',getExperiments);
router.post('/createExperiment',CreatExperiment)
router.get('/fetchExperimentByName/:name', FetchExperimentByName)

router.post('/submitAns',SubmitAns)

export default router
import express from 'express'
import { getExperiments,CreatExperiment, FetchExperimentByName } from '../controllers/experiments.js';

const router = express.Router();

router.get('/',getExperiments);
router.post('/createExperiment',CreatExperiment)
router.get('/fetchExperimentByName/:name', FetchExperimentByName)


export default router
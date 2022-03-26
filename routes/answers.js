import express from 'express'

import { SubmitAns } from '../controllers/answers.js';

const router = express.Router();

router.post('/submitAns',SubmitAns)


export default router
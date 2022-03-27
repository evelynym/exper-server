import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import experimentRouter from "./routes/experiments.js";
import answerRouter from "./routes/answers.js";
const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/experiments", experimentRouter);
app.use("/answers", answerRouter);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`server running`)))
  .catch((e) => console.log(e.message));

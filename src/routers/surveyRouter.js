import express from "express"
import * as surveyController from "../controller/surveyController"

const surveyRouter = express.Router()
surveyRouter.post('/survey',surveyController.survey)
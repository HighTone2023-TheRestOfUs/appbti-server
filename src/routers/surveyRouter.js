import express from "express"
import * as surveyController from "../controller/surveyController"

const surveyRouter = express.Router()
surveyRouter.post('/add',surveyController.addApp)
surveyRouter.post('/survey',surveyController.updateApp)

export default surveyRouter
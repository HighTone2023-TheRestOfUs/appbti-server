import express from "express"
import * as surveyController from "../controller/appbtiTestController"

const appbtiTestRouter = express.Router()
appbtiTestRouter.post('/runtest',surveyController.runtest)

export default appbtiTestRouter
import express from "express"
import * as stat from "../controller/statsController"

const statsRouter = express.Router()
statsRouter.post('/add',stat.addRecord)
statsRouter.get('/list',stat.getRecord)


export default statsRouter
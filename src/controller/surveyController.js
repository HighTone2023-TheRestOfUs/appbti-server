import * as baseResponseStatus from "../response/baseResponseStatus"
import db from "../db"

export const addSurvey = async (req,res) => {
    const {appName,property,value} = req.body;

    console.log(appName,property,value)
    
    db.query(`select * from `)

    return res.status(200).json({
        ...baseResponseStatus.SUCCESS,
        message:"성공"
    })
}
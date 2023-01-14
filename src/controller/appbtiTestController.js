import baseResponseStatus from "../response/baseResponseStatus"
import db from "../db"


export const runtest = async (req,res) => {
    const {appName,simplePoint,numberPoint,functionPoint,category} = req.body
    try {
        db.query(`insert into apps(appName,simplePoint,numberPoint,functionPoint,category) values("${appName}",${simplePoint},${numberPoint},${functionPoint},"${category}")`)
        return res.status(200).json({
            ...baseResponseStatus.SUCCESS,
            message:"앱 등록 성공"
        })
    } catch(err) {
        return res.status(400).json({
            ...baseResponseStatus.FAILURE,
            message:"앱 등록 실패"
        })
    }
}


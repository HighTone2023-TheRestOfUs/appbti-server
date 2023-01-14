import * as baseResponseStatus from "../response/baseResponseStatus"
import db from "../db"


export const addApp = async (req,res) => {
    const {appName,simplePoint,numberPoint,functionPoint,category} = req.body

    try {
        db.query(`insert into apps(appName,simplePoint,numberPoint,functionPoint,category) values(${appName},${simplePoint},${numberPoint},${functionPoint},${category})`)
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


export const updateApp = async (req,res) => {
    // simplePoint or numberPoint or functionPoint
    const propertyList = ["simplePoint","numberPoint","functionPoint"]
    const {appName,property,value} = req.body;
    try{

        if (propertyList.includes(property)) throw err
        db.query(`update apps set ${property}=apps.${property}+${value} where=${appName}`)
        return res.status(200).json({
            ...baseResponseStatus.SUCCESS,
            message:"속성 값 업데이트 성공"
        })

    }catch(err) {
        return res.status(400).json({
            ...baseResponseStatus.FAILURE,
            message:"앱 평가 수정 실패"
        })
    }



}


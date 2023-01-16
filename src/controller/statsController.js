import baseResponseStatus from "../response/baseResponseStatus"
import db from "../db"


export const addRecord = async (req,res) => {
    try {
        console.log(req.body)
        req.body.forEach(e,idx => {
            db.query(`update records set selected=records.selected+1 where id=${idx};`)
        });

        return res.status(200).json({
            ...baseResponseStatus.SUCCESS,
            message:"앱 요청 성공"
        })
    } catch(err) {
        return res.status(400).json({
            ...baseResponseStatus.FAILURE,
            message:"앱 요청 실패"
        })
    }
}

export const getRecord = async(req,res) => {
    try{
        const data = db.query(`
            select * from records
        `)
        return res.status(400).json({
            ...baseResponseStatus.SUCCESS,
            message:"리스트 get실패",
            data:data
        })
    }catch(err) {
        return res.status(400).json({
            ...baseResponseStatus.FAILURE,
            message:"리스트 get실패"
        })
    }
}

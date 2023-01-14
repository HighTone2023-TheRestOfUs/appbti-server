import * as baseResponseStatus from "../response/baseResponseStatus"

export const survey = async (req,res) => {
    const {appName,property,value} = req.body;

    console.log(appName,property,value)

    return res.status(200).json({
        ...baseResponseStatus.SUCCESS,
        message:"성공"
    })
}
const express = require('express');
const dotenv = require('dotenv')
import cors from "cors"
const methodOverride = require('method-override');
import routers from "./routers/index"

class App{
    constructor(){
        dotenv.config();
        this.app = express();

        this.setMiddleWare();                   
        this.getRouting();
    }

    setMiddleWare(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(cors())
        this.app.use(methodOverride());
    }

    // route들을 사용한다
    getRouting(){
        this.app.use('/api/survey',routers.surveyRouter);
        this.app.use('/api/stats',routers.statsRouter)
    }

}

const app = new App().app
export default app
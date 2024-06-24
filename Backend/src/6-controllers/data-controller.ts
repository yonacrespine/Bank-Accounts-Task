import express, { NextFunction, Request, Response } from "express";
import { dataService } from "../5-services/data-service";

import { StatusCode } from "../3-models/enums";
import { BankAccountModel } from "../3-models/account-operation-model";


const router= express.Router()

router.get("/bank-account/:accountnumber", async(request:Request, response:Response, next: NextFunction)=>{

    try{
        const accountnumber= +request.params.accountnumber
        const detailsAccount= await dataService.getAllDetailsAccount(accountnumber)
        response.json(detailsAccount)
    }
    catch(error:any){
        next(error)
    }
})


router.post("/bank-account", async(request:Request, response:Response, next: NextFunction)=>{
    try{
        const account= new BankAccountModel(request.body)
        const addedAccount= await dataService.addOperation(account)
        response.status(StatusCode.Created).json(addedAccount)
    }
    catch(error:any){
        next(error)

    }

})



export default router

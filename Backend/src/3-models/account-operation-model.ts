
import {Document, Schema, model} from "mongoose"


enum OperationType{
   retrait= "withdrawal",
    deposit="deposit",
   loan= "loan"
}

export interface IBankAccountModel extends Document {

    accountNumber: number
    typeOperation: OperationType
    amount: number
    date: Date
    interest: number
    payments: number

}

export const banqueSchema= new Schema<IBankAccountModel>({
    accountNumber: {
        type: Number,
        required:[true, "Missing account Number"],
        min: [100, "To Short account Number"],
        max: [100000, "To long account number"]
    },
    typeOperation: {
        type: String,
        enum: Object.values(OperationType),
        required: [true, "Missing type of operation"]
    },
    amount: {
        type: Number,
        required: [true, "Missing somme "],
        min: [4, "To Short somme"],
        max: [10000, "To long somme"]

    },
    date:{
        type: Date,
        default: Date.now
    },
    interest: {
        type: Number,
       
        min: [0, "To Short  interest"],
        max: [60, "To long interest"]
    },
    payments: {
        type: Number,
        
        min: [1, "To Short payments"],
        max: [36, "To long account payments"]
    }
    
},
 {versionKey: false})


 export const BankAccountModel= model<IBankAccountModel>("BankAccountModel", banqueSchema, "accountOperations")


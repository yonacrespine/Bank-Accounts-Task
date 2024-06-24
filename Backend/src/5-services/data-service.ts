import { BankAccountModel, IBankAccountModel } from "../3-models/account-operation-model";
import { ValidationError } from "../3-models/client-errors";


class DataService {

    public async getAllDetailsAccount(accountNumber: number):Promise<IBankAccountModel[]>{
        return BankAccountModel.find({accountNumber}).exec()
    }

    public async addOperation(operation: IBankAccountModel):Promise<IBankAccountModel>{
        const errors= operation.validateSync()
        if(errors) throw new ValidationError(errors.message)
        return operation.save()
    }

    

}

export const dataService = new DataService();


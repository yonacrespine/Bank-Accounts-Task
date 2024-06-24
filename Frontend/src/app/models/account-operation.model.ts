


enum OperationType{
    retrait= "withdrawal",
     deposit="deposit",
    loan= "loan"
 }


export class AccountOperationModel{

    public _id: string 
    public accountNumber: number
    public typeOperation: OperationType
    public amount: number
    public date: Date
    public interest: number
    public payments: number
}
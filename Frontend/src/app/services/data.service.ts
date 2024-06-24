import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { appConfig } from '../app.config';
import { firstValueFrom } from 'rxjs';
import { AccountOperationModel } from '../models/account-operation.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    public async getAllAccount(accountNumber: number):Promise<AccountOperationModel[]> {
        const observable= this.http.get<AccountOperationModel[]>(appConfig.bankAccount + accountNumber)
        const accounts= await firstValueFrom(observable)

        return accounts

    }

    public async addAccount(account:AccountOperationModel):Promise<void>{
        const observable= this.http.post<AccountOperationModel>(appConfig.bankAccount, account)
        const addedAccount= await firstValueFrom(observable)
        console.log(addedAccount)
    }
}

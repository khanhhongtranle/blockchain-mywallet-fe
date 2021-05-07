import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {BackendService} from './backend.service';
import {Observable, Subject} from 'rxjs';
import {BroadcastService} from './broadcast.service';

@Injectable()
export class WalletService {
    public static walletAddress: string;
    private static walletBalance: number;

    constructor(private auth: AuthService, private backend: BackendService, private broadcast: BroadcastService) {
        WalletService.walletAddress = this.auth.getTokenValue('public-key');
        WalletService.walletBalance = this.getBalance(WalletService.walletAddress);
    }

    public get balance(): number {
        return WalletService.walletBalance;
    }

    public set changeBalance(value: number) {
        WalletService.walletBalance += value;
    }

    // method get wallet data (balance)
    private getBalance(address): number{
        let amount = 0;
        this.backend.postRequest('amount', {}, {address}, this.auth.jwtToken)
            .subscribe((response) => {
                // tslint:disable-next-line:no-debugger
                debugger;
                const resJson = JSON.parse(response);
                if (resJson.status === 201){
                    const bodyJson = JSON.parse(resJson.body);
                    amount = bodyJson.data.amount;
                    this.broadcast.broadcastMessage('amount.update', amount);
                }
            });
        return amount;
    }

    // method buy coins
    public buyCoins(address, coins): Observable<any>{
        const responseSubject = new Subject<any>();
        const body = {
            in: {
                sender_address: 'KHTL',
                receiver_address: address,
                amount: coins
            },
           out: {
               receiver_address: null,
               sender_address: null,
               amount: null,
           }
        };
        this.backend.postRequest('add_block', {}, body, this.auth.jwtToken)
            .subscribe((response) => {
                responseSubject.next(response);
                responseSubject.complete();
            });
        return responseSubject.asObservable();
    }

    // method send transaction

    // method mine (?!!!)
}

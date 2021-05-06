import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {BackendService} from './backend.service';

@Injectable()
export class WalletService {
    public static walletAddress: string;
    private static walletBalance: number;

    constructor(private auth: AuthService, private backend: BackendService) {
        WalletService.walletAddress = this.auth.getTokenValue('public-key');
        WalletService.walletBalance = 0;
    }

    public get balance(): number {
        return WalletService.walletBalance;
    }

    public set changeBalance(value: number) {
        WalletService.walletBalance += value;
    }

    // method get wallet data (balance)

    // method buy coins
    public buyCoins(coins): void{
        const body = {
            in: {
                sender_address: 'KHTL',
                receiver_address: WalletService.walletAddress,
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
                console.log(response);
            });
    }

    // method send transaction

    // method mine (?!!!)
}

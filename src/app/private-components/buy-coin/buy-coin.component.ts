import {Component, OnInit} from '@angular/core';
import {WalletService} from '../../services/wallet.service';

@Component({
    selector: 'app-buy-coin',
    templateUrl: './buy-coin.component.html',
    styleUrls: ['./buy-coin.component.css']
})
export class BuyCoinComponent implements OnInit {
    public coins: number;
    public address: string;
    public loading: boolean;
    public noti: boolean;
    public notification: string;

    constructor(private wallet: WalletService) {
        this.address = WalletService.walletAddress;
        this.loading = false;
        this.noti = false;
    }

    ngOnInit(): void {
    }

    public buyCoinsHandle(): void {
        this.loading = true;
        this.wallet.buyCoins(this.address, this.coins)
        .subscribe((response) => {
            console.log(response);
            this.loading = false;
            this.noti = true;
            this.notification = 'Successful';
        });
    }

    public dismissNotiHandle(): void {
        this.noti = false;
    }
}

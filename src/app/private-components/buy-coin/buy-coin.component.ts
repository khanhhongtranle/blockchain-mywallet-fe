import {Component, OnInit} from '@angular/core';
import {WalletService} from '../../services/wallet.service';

@Component({
    selector: 'app-buy-coin',
    templateUrl: './buy-coin.component.html',
    styleUrls: ['./buy-coin.component.css']
})
export class BuyCoinComponent implements OnInit {
    public coins: number;

    constructor(private wallet: WalletService) {
    }

    ngOnInit(): void {
    }

    public buyCoinsHandle(): void {
        this.wallet.buyCoins(this.coins);
    }
}

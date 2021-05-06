import {Component, OnInit} from '@angular/core';
import {WalletService} from '../../services/wallet.service';

declare var window: any;

@Component({
    selector: 'app-dashboard-component',
    templateUrl: './dashboard-component.component.html',
    styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
    public balance: number;
    public walletAddress: string;

    constructor(private wallet: WalletService) {
        this.walletAddress = WalletService.walletAddress;
        this.balance = this.wallet.balance;
    }

    ngOnInit(): void {
    }

}

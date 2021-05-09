import {Component, OnInit} from '@angular/core';
import {WalletService} from '../../services/wallet.service';
import {BroadcastService, BroadcastMessage} from '../../services/broadcast.service';

declare var window: any;

@Component({
    selector: 'app-dashboard-component',
    templateUrl: './dashboard-component.component.html',
    styleUrls: ['./dashboard-component.component.css'],
    providers: [WalletService]
})
export class DashboardComponentComponent implements OnInit {
    public balance: number;
    public walletAddress: string;
    private serviceSubscriptions: any[] = [];

    constructor(private wallet: WalletService, private broadcast: BroadcastService) {
        this.walletAddress = WalletService.walletAddress;
        this.balance = this.wallet.balance;

        this.serviceSubscriptions.push(
            this.broadcast.message$.subscribe(message => {
                this.handleMessage(message);
            })
        );
    }

    ngOnInit(): void {
    }

    private handleMessage(message: BroadcastMessage): void {
        switch (message.messagetype) {
            case 'amount.update':
                this.balance = message.messagedata;
                break;

            case 'amount.update.new':
                this.balance -= message.messagedata.amount;
                break;
            default:
            // to do nothing
        }
    }
}

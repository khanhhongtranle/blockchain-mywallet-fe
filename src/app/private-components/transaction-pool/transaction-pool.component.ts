import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../../services/transaction.service';
import {UnconfirmedTransaction} from '../../services/interface.service';
import {BroadcastMessage, BroadcastService} from '../../services/broadcast.service';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-transaction-pool',
    templateUrl: './transaction-pool.component.html',
    styleUrls: ['./transaction-pool.component.css']
})
export class TransactionPoolComponent implements OnInit {

    public listOfTransaction: UnconfirmedTransaction[] = [];
    public serviceSubscriptions: any[] = [];
    public noti: boolean;
    public notification: string;

    constructor(private auth: AuthService, private transaction: TransactionService, private broadcast: BroadcastService) {
        this.noti = false;

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
            case 'transaction.update':
                this.listOfTransaction = message.messagedata.unconfirmed;
                break;
            default:

        }
    }

    public mineHandle(): void {
        this.transaction.confirmTransaction(this.auth.publicKey)
        .subscribe((response) => {
            const resJson = JSON.parse(response);
            if (resJson.status === 200) {
                this.noti = true;
                this.notification = resJson.body;
            }
        });
    }
}

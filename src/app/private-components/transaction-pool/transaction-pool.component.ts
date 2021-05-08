import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../../services/transaction.service';
import {UnconfirmedTransaction} from '../../services/interface.service';
import {BroadcastMessage, BroadcastService} from '../../services/broadcast.service';

@Component({
    selector: 'app-transaction-pool',
    templateUrl: './transaction-pool.component.html',
    styleUrls: ['./transaction-pool.component.css']
})
export class TransactionPoolComponent implements OnInit {

    public listOfTransaction: UnconfirmedTransaction[] = [];
    public serviceSubscriptions: any[] = [];

    constructor(private transaction: TransactionService, private broadcast: BroadcastService) {
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
                this.listOfTransaction = message.messagedata;
                break;
            default:

        }
    }
}

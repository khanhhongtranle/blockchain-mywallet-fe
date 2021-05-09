import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../../services/transaction.service';
import {UnconfirmedTransaction} from '../../services/interface.service';
import {BroadcastMessage, BroadcastService} from '../../services/broadcast.service';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-transaction-pool',
    templateUrl: './transaction-pool.component.html',
    styleUrls: ['./transaction-pool.component.css'],
    providers: [TransactionService]
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
                console.log(message);
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
            case 'transaction.update.new':
                const newTx: UnconfirmedTransaction = {
                    iD: message.messagedata.new_tx.id,
                    senderAddress: message.messagedata.new_tx.sender_address,
                    receiverAddress: message.messagedata.new_tx.receiver_address,
                    amount: message.messagedata.new_tx.amount,
                    createdDate: message.messagedata.new_tx.timestamp
                } ;
                this.listOfTransaction.push(newTx);
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
                this.listOfTransaction = [];
            }
        });
    }
}

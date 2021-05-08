import {Injectable} from '@angular/core';
import {UnconfirmedTransaction, ConfirmedTransaction} from './interface.service';
import {BackendService} from './backend.service';
import {AuthService} from './auth.service';
import {BroadcastService} from './broadcast.service';

@Injectable()
export class TransactionService {

    public unconfirmedTransaction: UnconfirmedTransaction[] = [];
    public confirmedTransaction: ConfirmedTransaction[] = [];

    constructor(private backend: BackendService, private auth: AuthService, private broadcast: BroadcastService) {
        this.loadUnConfirmedTransaction();
    }

    public loadUnConfirmedTransaction(): void {
        // return all of uncomfirmed transaction
        this.backend.postRequest('unspent_transactions', {}, {}, this.auth.jwtToken)
        .subscribe((response) => {
            const resJson = JSON.parse(response);
            if (resJson.status === 200) {
                const bodyJson = JSON.parse(resJson.body);
                for (const tx of bodyJson) {
                    const element: UnconfirmedTransaction = {
                        iD: tx.id,
                        amount: tx.amount,
                        senderAddress: tx.sender_address,
                        receiverAddress: tx.receiver_address,
                        createdDate: tx.timestamp
                    };
                    this.unconfirmedTransaction.push(element);
                    // tslint:disable-next-line:no-debugger
                    debugger;
                    this.broadcast.broadcastMessage('transaction.update', this.unconfirmedTransaction);
                }
            }
        });
    }

    public createTransaction(transaction: UnconfirmedTransaction): void {

    }

    public confirmTransaction(transactionID: string): void {

    }
}

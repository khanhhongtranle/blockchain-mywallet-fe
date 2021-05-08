import {Injectable} from '@angular/core';
import {UnconfirmedTransaction, ConfirmedTransaction} from './interface.service';
import {BackendService} from './backend.service';
import {AuthService} from './auth.service';
import {BroadcastService} from './broadcast.service';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class TransactionService {

    public unconfirmedTransaction: UnconfirmedTransaction[] = [];
    public confirmedTransaction: ConfirmedTransaction[] = [];

    constructor(private backend: BackendService, private auth: AuthService, private broadcast: BroadcastService) {
        this.loadUnConfirmedTransaction();
        this.loadConfirmedTransaction();
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
                    this.broadcast.broadcastMessage('transaction.update', {unconfirmed: this.unconfirmedTransaction, confirmed: []});
                }
            }
        });
    }

    public loadConfirmedTransaction(): void {
        this.backend.postRequest('confirmed_transactions', {}, {}, this.auth.jwtToken)
        .subscribe((response) => {
            const resJson = JSON.parse(response);
            if (resJson.status === 200) {
                const bodyJson = JSON.parse(resJson.body);
                for (const tx of bodyJson) {
                    const element: ConfirmedTransaction = {
                        iD: tx.id,
                        senderAddress: tx.sender_address,
                        receiverAddress: tx.receiver_address,
                        amount: tx.amount,
                        createdDate: tx.timestamp,
                        confirmedDate: tx.confirmed_timestamp
                    };
                    this.confirmedTransaction.push(element);
                    this.broadcast.broadcastMessage('confirmed_transaction.update', {
                        unconfirmed: [],
                        confirmed: this.confirmedTransaction
                    });
                }
            }
        });
    }

    public confirmTransaction(miner): Observable<any> {
        const responseSubject = new Subject<any>();
        this.backend.postRequest('mine', {}, {miner}, this.auth.jwtToken)
        .subscribe((response) => {
            responseSubject.next(response);
            responseSubject.complete();
        });
        return responseSubject.asObservable();
    }
}

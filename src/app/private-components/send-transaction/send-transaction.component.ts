import {Component, OnInit} from '@angular/core';
import {WalletService} from '../../services/wallet.service';

@Component({
    selector: 'app-send-transaction',
    templateUrl: './send-transaction.component.html',
    styleUrls: ['./send-transaction.component.css']
})
export class SendTransactionComponent implements OnInit {

    public amount: number;
    public receiverAddress: string;
    public needMoreAmount: number;
    public notification: string;
    public noti: boolean;

    constructor(private wallet: WalletService) {
        this.noti = false;
    }

    ngOnInit(): void {
    }

    public sendTransactionHandle(): void {
        this.wallet.sendTransaction(this.receiverAddress, this.amount).subscribe((response) => {
            const resJson = JSON.parse(response);
            if (resJson.status === 201) {
                console.log(resJson.body);
                this.notification = 'Send transaction successful, now it is in transaction pool.';
                this.noti = true;
            }else if (resJson.status === 200){
                const bodyJson = JSON.parse(resJson.body);
                const unspentAmount = bodyJson.data.unspent_amount;
                const neededAmount = bodyJson.data.needed_amount;
                this.needMoreAmount = neededAmount - unspentAmount;
                this.notification = 'Your balance not enough to send this transaction, you need more ' + this.needMoreAmount + ' coins.';
                this.noti = true;
            }
        });
    }
}

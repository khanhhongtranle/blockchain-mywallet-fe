import {Component, OnInit} from '@angular/core';
import {ConfirmedTransaction, Block} from '../../services/interface.service';
import {TransactionService} from '../../services/transaction.service';
import {BlockService} from '../../services/block.service';
import {BroadcastMessage, BroadcastService} from '../../services/broadcast.service';

@Component({
    selector: 'app-history-transaction',
    templateUrl: './history-transaction.component.html',
    styleUrls: ['./history-transaction.component.css'],
    providers: [TransactionService, BlockService]
})
export class HistoryTransactionComponent implements OnInit {

    public transactions: ConfirmedTransaction[] = [];
    public blocks: Block[] = [];
    public subcribe: any[] = [];

    constructor(private transaction: TransactionService, private block: BlockService, private broadcast: BroadcastService) {
        this.subcribe.push(
            this.broadcast.message$.subscribe(message => {
                this.handleMessage(message);
            }));
    }

    ngOnInit(): void {
    }

    private handleMessage(message: BroadcastMessage): void {
        switch (message.messagetype) {
            case 'blockchain.update':
                this.blocks = message.messagedata.chains;
                break;
            case 'confirmed_transaction.update':
                this.transactions = message.messagedata.confirmed;
                break;
            case 'blockchain.update.new':
                console.log('blockchain.update.new');
                const dataBlock = message.messagedata.new_block;
                const dataTxs = message.messagedata.new_tsx;
                this.blocks.push({
                    index: dataBlock.index,
                    minerAddress: dataBlock.miner,
                    numberOfTransactions: dataBlock.num_of_tx,
                    minedDate: dataBlock.timestamp
                });
                for (const tx of dataTxs){
                    this.transactions.push({
                        iD: tx.id,
                        receiverAddress: tx.receiver_address,
                        senderAddress: tx.sender_address,
                        amount: tx.amount,
                        createdDate: tx.timestamp,
                        confirmedDate: tx.confirmed_timestamp
                    });
                }
                break;
            default:

        }
    }
}

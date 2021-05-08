import {Injectable} from '@angular/core';
import {Block} from './interface.service';
import {BackendService} from './backend.service';
import {AuthService} from './auth.service';
import {BroadcastService} from './broadcast.service';

@Injectable()
export class BlockService {

    public blockchain: Block[] = [];

    constructor(private backend: BackendService, private auth: AuthService, private broadcast: BroadcastService) {
        this.loadChains();
    }

    public loadChains(): void {
        this.backend.getRequest('chains', {}, this.auth.jwtToken)
        .subscribe((response) => {
            // tslint:disable-next-line:no-debugger
            debugger;
            const resJson = JSON.parse(response);
            if (resJson.status === 200) {
                const bodyJson = resJson.body;
                for (const tx of bodyJson) {
                    const element: Block = {
                        index: tx.index,
                        minerAddress: tx.miner,
                        minedDate: tx.timestamp,
                        numberOfTransactions: tx.num_of_tx
                    };
                    this.blockchain.push(element);
                    this.broadcast.broadcastMessage('blockchain.update', {chains: this.blockchain});
                }
            }
        });
    }
}

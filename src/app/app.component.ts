import {Component, OnInit} from '@angular/core';
import {SocketService} from './services/socket.service';
import {TransactionService} from './services/transaction.service';
import {BlockService} from './services/block.service';
import {WalletService} from './services/wallet.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private socket: SocketService,
                private transaction: TransactionService,
                private block: BlockService,
                private wallet: WalletService) {
    }

    ngOnInit(): void {
    }
}

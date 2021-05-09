import {Injectable} from '@angular/core';
import {BroadcastService} from './broadcast.service';
import {ConfigurationService} from './configuration.service';
import {AuthService} from './auth.service';

declare var io: any;

@Injectable()
export class SocketService {
    private socket: any;
    private socketHostUrl: string;

    constructor(private broadcast: BroadcastService, private config: ConfigurationService, private auth: AuthService) {
        this.socketHostUrl = this.config.socketUrl;

        // connect to socket io server
        this.socket = io.connect(this.socketHostUrl, {transports: ['websocket'], reconnection: true});

        // send connect message
        this.socket.emit('client_connect', 'client want to connect to server');

        // receive sever connection response
        this.socket.on('sever.connect', (response) => {
            console.log(response);
        });

        // receive message
        this.socket.on('transaction.update', (response) => {
            console.log('transaction ');
            console.log(response);
            this.broadcast.broadcastMessage('transaction.update.new', {new_tx: response});
        });

        this.socket.on('amount.update', (response) => {
            if (response.address === this.auth.publicKey) {
                this.broadcast.broadcastMessage('amount.update.new', {amount: response.amount});
            }
        });

        this.socket.on('blockchain.update', (response) => {
            const data = JSON.parse(response);
            this.broadcast.broadcastMessage('blockchain.update.new', {
                new_block: data.lastest_block,
                new_tsx: data.lastest_transactions
            });
        });
    }


}

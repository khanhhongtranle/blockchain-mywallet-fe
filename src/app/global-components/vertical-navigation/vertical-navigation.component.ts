import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-vertical-navigation',
    templateUrl: './vertical-navigation.component.html',
    styleUrls: ['./vertical-navigation.component.css']
})
export class VerticalNavigationComponent implements OnInit {

    @Output() public navigate = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    public navigateToDashBoard(): void {
        this.navigate.emit('dashboard');
    }

    public navigateToSendTransaction(): void {
        this.navigate.emit('sendtransaction');
    }

    public navigateToBuyCoin(): void {
        this.navigate.emit('buycoin');
    }

    public navigateToHistory(): void {
        this.navigate.emit('history');
    }

    public navigateToTransactionPool(): void {
        this.navigate.emit('pool');
    }
}

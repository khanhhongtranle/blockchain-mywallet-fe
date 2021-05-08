import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    private tab: string;

    constructor() {
        this.tab = 'dashboard';
    }

    ngOnInit(): void {
    }

    public navigateTabHandle(value: string): void {
        this.tab = value;
    }

    public get showDashboard(): boolean {
        return this.tab === 'dashboard';
    }

    public get showBuyCoin(): boolean {
        return this.tab === 'buycoin';
    }

    public get showSendTransaction(): boolean {
        return this.tab === 'sendtransaction';
    }

    public get showHistory(): boolean {
        return this.tab === 'history';
    }

    public get showTransactionPool(): boolean {
        return this.tab === 'pool';
    }
}

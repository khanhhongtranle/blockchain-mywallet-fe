import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-access-my-wallet',
    templateUrl: './access-my-wallet.component.html',
})
export class AccessMyWalletComponent implements OnInit {
    public privateKey: string;
    public password: string;

    constructor() {
        this.privateKey = '';
        this.password = '';
    }

    ngOnInit(): void {
    }

    public clickToAccessHandle(): void {
        if (this.privateKey === '' || this.password === ''){
            return;
        }
        // service login
    }
}

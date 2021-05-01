import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-create-new-wallet',
    templateUrl: './create-new-wallet.component.html',
})
export class CreateNewWalletComponent implements OnInit {

    private password: string;
    public isInputInvalid: boolean;
    public loading: boolean;
    public privateKey: string;

    constructor() {
        this.password = '';
        this.isInputInvalid = false;
        this.loading = false;
    }

    ngOnInit(): void {
    }

    public enterPasswordHandle(value: string): void {
        this.isInputInvalid = !value;
        this.password = value;
    }

    public clickToNextStepHandle(): void {
        if (this.password === '') {
            this.isInputInvalid = true;
            return;
        }
        // gọi 1 server sinh ra private key
        this.loading = true;

        this.privateKey = 'hdkjahsdkjahslkdhakjshdajk';

        this.loading = false;
    }
}

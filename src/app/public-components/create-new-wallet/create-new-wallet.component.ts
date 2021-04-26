import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-create-new-wallet',
    templateUrl: './create-new-wallet.component.html',
    styleUrls: ['./create-new-wallet.component.css']
})
export class CreateNewWalletComponent implements OnInit {

    private password: string;
    public isInputInvalid: boolean;
    public loading: boolean;

    constructor() {
    }

    ngOnInit(): void {
        this.password = '';
        this.isInputInvalid = false;
        this.loading = false;
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
        // gọi 1 server sinh ra key store file
        this.loading = true;
    }
}

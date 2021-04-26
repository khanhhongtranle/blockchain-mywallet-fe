import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-create-new-wallet',
    templateUrl: './create-new-wallet.component.html',
    styleUrls: ['./create-new-wallet.component.css']
})
export class CreateNewWalletComponent implements OnInit {

    public password: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}

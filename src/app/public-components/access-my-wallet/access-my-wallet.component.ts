import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';

@Component({
    selector: 'app-access-my-wallet',
    templateUrl: './access-my-wallet.component.html',
})
export class AccessMyWalletComponent implements OnInit {
    public privateKey: string;
    public password: string;

    constructor(private backend: BackendService) {
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
        this.backend.getRequest('access_my_wallet', {password: this.password, private_key: this.privateKey})
            .subscribe((response) => {
                console.log(response);
            });
    }
}

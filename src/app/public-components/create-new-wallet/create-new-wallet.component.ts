import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-new-wallet',
    templateUrl: './create-new-wallet.component.html',
})
export class CreateNewWalletComponent implements OnInit {

    private password: string;
    public isInputInvalid: boolean;
    public loading: boolean;
    public privateKey: string;

    constructor(private backend: BackendService, private router: Router) {
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

        this.backend.postRequest('create_new_wallet', {}, {password: this.password})
        .subscribe((response) => {
            const resJson = JSON.parse(response);
            if (resJson.status === 201) {
                const bodyJson = JSON.parse(resJson.body);
                this.privateKey = bodyJson.data.private_key;
                this.loading = false;
            }
        });

    }

    public closeModalPrivateKeyHandle(): void {
        this.privateKey = '';
        this.router.navigate(['/access-my-wallet']);
    }
}

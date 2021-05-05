import {Component, OnInit} from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-access-my-wallet',
    templateUrl: './access-my-wallet.component.html',
})
export class AccessMyWalletComponent implements OnInit {
    public privateKey: string;
    public password: string;
    public invalidWallet: boolean;

    constructor(private backend: BackendService, private router: Router, private auth: AuthService) {
        this.privateKey = '';
        this.password = '';
        this.invalidWallet = false;
    }

    ngOnInit(): void {
    }

    public clickToAccessHandle(): void {
        if (this.privateKey === '' || this.password === ''){
            return;
        }
        // service login
        this.backend.postRequest('access_my_wallet', {} , {password: this.password, private_key: this.privateKey})
            .subscribe((response) => {
                const resJson = JSON.parse(response);
                if (resJson.status === 201){
                    const bodyJson = JSON.parse(resJson.body);
                    // Save to local storage
                    this.auth.addNewToken('token', bodyJson.data.jwt_token); // Add session id
                    this.auth.addNewToken('public-key', bodyJson.data.public_key); // Add session id
                    this.router.navigate(['/dashboard']);
                }else if (resJson.status === 400){
                    this.invalidWallet = true;
                }
            });
    }
}

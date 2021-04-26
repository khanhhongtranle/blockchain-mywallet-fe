import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    public toCreateNewWalletRoute(): void {
        this.router.navigate(['create-new-wallet']);
    }

    public toAccessMyWalletRoute(): void {
        this.router.navigate(['access-my-wallet']);
    }
}

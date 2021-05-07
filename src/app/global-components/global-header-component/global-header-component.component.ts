import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-global-header-component',
    templateUrl: './global-header-component.component.html',
})
export class GlobalHeaderComponentComponent implements OnInit {
    public userToogle: boolean;

    constructor(private auth: AuthService, private router: Router) {
        this.userToogle = false;
    }

    ngOnInit(): void {
    }

    public userToogleHandle(): void {
        this.userToogle = !this.userToogle;
    }

    public logoutHandle(): void {
        // service auth logout
        this.auth.logout();
        this.router.navigate(['/login']);
    }
}

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-global-header-component',
    templateUrl: './global-header-component.component.html',
})
export class GlobalHeaderComponentComponent implements OnInit {
    public userToogle: boolean;

    constructor() {
        this.userToogle = false;
    }

    ngOnInit(): void {
    }

    public userToogleHandle(): void {
        this.userToogle = !this.userToogle;
    }

    public logoutHandle(): void {
        // service auth logout
    }
}

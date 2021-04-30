import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-vertical-navigation',
    templateUrl: './vertical-navigation.component.html',
    styleUrls: ['./vertical-navigation.component.css']
})
export class VerticalNavigationComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    public navigateToDashBoard(): void {
        this.router.navigate(['/dashboard']);
    }

    public navigateToSendTransaction(): void {
        this.router.navigate(['/send-transaction']);
    }

    public navigateToBuyCoin(): void {
        this.router.navigate(['/buy-coin']);
    }
}

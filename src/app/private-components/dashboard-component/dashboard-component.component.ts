import {Component, OnInit} from '@angular/core';

declare var window: any;

@Component({
    selector: 'app-dashboard-component',
    templateUrl: './dashboard-component.component.html',
    styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

    public maxHeight: string;

    constructor() {
        this.maxHeight = 'height: ' + window.screen.height + ' px';
        console.log(this.maxHeight);
    }

    ngOnInit(): void {
    }

}

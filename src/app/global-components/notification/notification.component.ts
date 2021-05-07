import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
    @Input() public notification: string;
    @Output() public dismissEvent = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit(): void {
    }

    public dismissHandle(): void {
        this.dismissEvent.emit(true);
    }
}

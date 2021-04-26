import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-loading-modal-component',
    templateUrl: './loading-modal-component.component.html',
})
export class LoadingModalComponentComponent implements OnInit {
    @Input() public isOpen: boolean;

    constructor() {
    }

    ngOnInit(): void {
    }

}

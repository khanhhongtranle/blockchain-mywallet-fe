import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModalComponentComponent } from './loading-modal-component/loading-modal-component.component';



@NgModule({
    declarations: [
        LoadingModalComponentComponent
    ],
    exports: [
        LoadingModalComponentComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GlobalComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModalComponentComponent } from './loading-modal-component/loading-modal-component.component';
import { GlobalHeaderComponentComponent } from './global-header-component/global-header-component.component';



@NgModule({
    declarations: [
        LoadingModalComponentComponent,
        GlobalHeaderComponentComponent,
    ],
    exports: [
        LoadingModalComponentComponent,
        GlobalHeaderComponentComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class GlobalComponentsModule { }

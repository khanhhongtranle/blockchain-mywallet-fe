import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModalComponentComponent } from './loading-modal-component/loading-modal-component.component';
import { GlobalHeaderComponentComponent } from './global-header-component/global-header-component.component';
import { VerticalNavigationComponent } from './vertical-navigation/vertical-navigation.component';



@NgModule({
    declarations: [
        LoadingModalComponentComponent,
        GlobalHeaderComponentComponent,
        VerticalNavigationComponent,
    ],
    exports: [
        LoadingModalComponentComponent,
        GlobalHeaderComponentComponent,
        VerticalNavigationComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class GlobalComponentsModule { }

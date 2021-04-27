import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import {GlobalComponentsModule} from '../global-components/global-components.module';



@NgModule({
  declarations: [
    DashboardComponentComponent
  ],
    imports: [
        CommonModule,
        GlobalComponentsModule
    ]
})
export class PrivateComponentsModule { }

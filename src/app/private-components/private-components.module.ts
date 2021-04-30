import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import {GlobalComponentsModule} from '../global-components/global-components.module';
import { SendTransactionComponent } from './send-transaction/send-transaction.component';



@NgModule({
  declarations: [
    DashboardComponentComponent,
    SendTransactionComponent,
  ],
    imports: [
        CommonModule,
        GlobalComponentsModule
    ]
})
export class PrivateComponentsModule { }

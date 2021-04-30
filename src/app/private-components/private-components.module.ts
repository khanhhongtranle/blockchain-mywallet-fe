import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import {GlobalComponentsModule} from '../global-components/global-components.module';
import { SendTransactionComponent } from './send-transaction/send-transaction.component';
import { BuyCoinComponent } from './buy-coin/buy-coin.component';



@NgModule({
  declarations: [
    DashboardComponentComponent,
    SendTransactionComponent,
    BuyCoinComponent,
  ],
    imports: [
        CommonModule,
        GlobalComponentsModule
    ]
})
export class PrivateComponentsModule { }

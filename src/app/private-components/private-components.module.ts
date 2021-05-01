import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import {GlobalComponentsModule} from '../global-components/global-components.module';
import { SendTransactionComponent } from './send-transaction/send-transaction.component';
import { BuyCoinComponent } from './buy-coin/buy-coin.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    DashboardComponentComponent,
    SendTransactionComponent,
    BuyCoinComponent,
    HomePageComponent,
  ],
    imports: [
        CommonModule,
        GlobalComponentsModule
    ]
})
export class PrivateComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import {GlobalComponentsModule} from '../global-components/global-components.module';
import { SendTransactionComponent } from './send-transaction/send-transaction.component';
import { BuyCoinComponent } from './buy-coin/buy-coin.component';
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule} from '@angular/forms';
import { HistoryTransactionComponent } from './history-transaction/history-transaction.component';
import { TransactionPoolComponent } from './transaction-pool/transaction-pool.component';



@NgModule({
  declarations: [
    DashboardComponentComponent,
    SendTransactionComponent,
    BuyCoinComponent,
    HomePageComponent,
    HistoryTransactionComponent,
    TransactionPoolComponent,
  ],
    imports: [
        CommonModule,
        GlobalComponentsModule,
        FormsModule
    ]
})
export class PrivateComponentsModule { }

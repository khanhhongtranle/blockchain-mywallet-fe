import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CreateNewWalletComponent} from './create-new-wallet/create-new-wallet.component';
import {AccessMyWalletComponent} from './access-my-wallet/access-my-wallet.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {GlobalComponentsModule} from '../global-components/global-components.module';
import {LoadingModalComponentComponent} from '../global-components/loading-modal-component/loading-modal-component.component';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
        LoginComponent,
        PageNotFoundComponent,
        CreateNewWalletComponent,
        AccessMyWalletComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        GlobalComponentsModule,
        RouterModule,
    ]
})
export class PublicComponentsModule {
}

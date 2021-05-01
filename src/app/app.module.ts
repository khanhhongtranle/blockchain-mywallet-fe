import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './public-components/page-not-found/page-not-found.component';
import {LoginComponent} from './public-components/login/login.component';
import {CreateNewWalletComponent} from './public-components/create-new-wallet/create-new-wallet.component';
import {AccessMyWalletComponent} from './public-components/access-my-wallet/access-my-wallet.component';
import {PublicComponentsModule} from './public-components/public-components.module';
import {PrivateComponentsModule} from './private-components/private-components.module';
import {GlobalComponentsModule} from './global-components/global-components.module';
import {DashboardComponentComponent} from './private-components/dashboard-component/dashboard-component.component';
import {SendTransactionComponent} from './private-components/send-transaction/send-transaction.component';
import {BuyCoinComponent} from './private-components/buy-coin/buy-coin.component';
import {AuthGuardService} from './services/authguard.service';
import {AuthService} from './services/auth.service';
import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';
import {HomePageComponent} from './private-components/home-page/home-page.component';

const appRoutes: Routes = [
    {path: '', component: DashboardComponentComponent, canActivate: [AuthGuardService]},
    {path: 'login', component: LoginComponent},
    {path: 'create-new-wallet', component: CreateNewWalletComponent},
    {path: 'access-my-wallet', component: AccessMyWalletComponent},
    {path: 'dashboard', component: HomePageComponent, canActivate: [AuthGuardService]},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        ),
        FormsModule,
        ReactiveFormsModule,
        PublicComponentsModule,
        PrivateComponentsModule,
        GlobalComponentsModule
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        AuthGuardService,
        AuthService,
        JwtHelperService,
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

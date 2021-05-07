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
import {AuthGuardService, LoggedAuthGuardService} from './services/authguard.service';
import {AuthService} from './services/auth.service';
import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';
import {HomePageComponent} from './private-components/home-page/home-page.component';
import {ConfigurationServiceProvider} from './services/configuration.service';
import {BackendService} from './services/backend.service';
import {HttpClientModule} from '@angular/common/http';
import {WalletService} from './services/wallet.service';
import {BroadcastService} from './services/broadcast.service';

const appRoutes: Routes = [
    {path: '', component: HomePageComponent, canActivate: [AuthGuardService]},
    {path: 'login', component: LoginComponent, canActivate: [LoggedAuthGuardService]},
    {path: 'create-new-wallet', component: CreateNewWalletComponent, canActivate: [LoggedAuthGuardService]},
    {path: 'access-my-wallet', component: AccessMyWalletComponent, canActivate: [LoggedAuthGuardService]},
    {path: 'dashboard', component: HomePageComponent, canActivate: [AuthGuardService]},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        // import HttpClientModule after BrowserModule.
        HttpClientModule,
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
        LoggedAuthGuardService,
        AuthService,
        JwtHelperService,
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        ConfigurationServiceProvider,
        BackendService,
        WalletService,
        BroadcastService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

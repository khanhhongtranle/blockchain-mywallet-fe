import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './public-components/page-not-found/page-not-found.component';
import {LoginComponent} from './public-components/login/login.component';
import {CreateNewWalletComponent} from './public-components/create-new-wallet/create-new-wallet.component';
import {AccessMyWalletComponent} from './public-components/access-my-wallet/access-my-wallet.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'create-new-wallet', component: CreateNewWalletComponent},
    {path: 'access-my-wallet', component: AccessMyWalletComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

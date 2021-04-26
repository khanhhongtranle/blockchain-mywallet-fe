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

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'create-new-wallet', component: CreateNewWalletComponent},
    {path: 'access-my-wallet', component: AccessMyWalletComponent},
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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

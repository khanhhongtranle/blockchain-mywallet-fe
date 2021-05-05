import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
    constructor(public jwtHelper: JwtHelperService) {}

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }

    public addNewToken(token: string, value: string): void{
        localStorage.setItem(token, value);
    }

    public removeToken(token: string): void{
        localStorage.removeItem(token);
    }

    public getTokenValue(token: string): string{
        return localStorage.getItem(token);
    }

    public get publicKey(): string{
        return localStorage.getItem('public-key');
    }

    public get jwtToken(): string{
        return localStorage.getItem('token');
    }
}

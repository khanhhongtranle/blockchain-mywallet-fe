import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class BackendService{
    private autoLogout: any = {};
    private httpErrorsToReport = [];
    private httpErrorReporting = false;
    private httpErrorReportingRetryTime = 10000;

    constructor(private http: HttpClient, private configuration: ConfigurationService, private router: Router) {
    }

    public get apiURL(): string{
        return this.configuration.apiUrl;
    }

    private getHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json');
        return headers;
    }

    private prepareParams(params: object): HttpParams {
        let output = new HttpParams();
        if (params) {
            Object.keys(params).forEach((key: string) => {
                const value = params[key];
                if (typeof value !== 'undefined' && value !== null) {
                    if (typeof value === 'object') {
                        output = output.append(key, JSON.stringify(value));
                    } else if (typeof value === 'boolean') {
                        output = output.append(key, value === true ? '1' : '0');
                    } else if (typeof value === 'number') {
                        output = output.append(key, value + '');
                    } else {
                        output = output.append(key, value.toString());
                    }
                }
            });
        }
        return output;
    }

    private resetTimeOut(): void {
        if (this.configuration.data.autoLogout > 0) {
            window.clearTimeout(this.autoLogout);
            this.autoLogout = window.setTimeout(
                () => this.logout(),
                parseInt(this.configuration.data.autoLogout, 10) * 60000
            );
        }
    }

    private logout(): void {
        this.router.navigate(['/login']);
    }

    public getRequest(route: string = '', params: any = {}): Observable<any> {
        const responseSubject = new Subject<any>();
        this.resetTimeOut();
        this.http.get(
            this.configuration.apiUrl + '/' + encodeURI(route),
            {headers: this.getHeaders(), observe: 'response', params: this.prepareParams(params)}
        ).subscribe(
            (res) => {
                responseSubject.next(res);
                responseSubject.complete();
            },
            err => {
                this.handleError(err, route, 'GET', {getParams: params});
                responseSubject.error(err);
            }
        );
        return responseSubject.asObservable();
    }

    public postRequest(route: string = '', params: any = {}, body: any = {}, httpErrorReport = true): Observable<any> {
        const responseSubject = new Subject<any>();

        this.resetTimeOut();

        let headers = this.getHeaders();
        if (body) {
            headers = headers.set('Content-Type', 'application/json');
        } else {
            headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        }

        this.http.post(
            this.configuration.apiUrl + '/' + encodeURI(route),
            body, {headers, observe: 'response', params: this.prepareParams(params), responseType: 'text'}
        ).subscribe(
            (res) => {
                responseSubject.next(res);
                responseSubject.complete();
            },
            err => {
                this.handleError(err, route, 'POST', {getParams: params, body}, httpErrorReport);
                responseSubject.error(err);
            }
        );
        return responseSubject.asObservable();
    }

    private handleError(err, route, method: string, data = null, httpErrorReport = true): void {
        switch (err.status) {
            case 401:
                console.log('Logged out your session');
                this.router.navigate(['/login']);
                break;
            case 0:
                if (httpErrorReport) {
                    console.log(httpErrorReport);
                }
        }
    }
}

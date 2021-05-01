import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
//
// interface backendRequestParams {
//     route: string;
//     method?: 'GET' | 'POST';
//     params?: any;
//     body?: any;
//     headers?: any;
// }

@Injectable()
export class BackendService{
    private autoLogout: any = {};
    private httpErrorsToReport = [];
    private httpErrorReporting = false;
    private httpErrorReportingRetryTime = 10000;

    constructor(private http: HttpClient, private configuration: ConfigurationService) {
    }

    public get apiURL(): string{
        return this.configuration.apiUrl;
    }
}

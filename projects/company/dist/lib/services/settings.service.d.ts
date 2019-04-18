import { HttpClient } from '@angular/common/http';
import { ICompanySettings } from '../models/company';
export declare class SettingsService {
    private http;
    constructor(http: HttpClient);
    getSettings(): ICompanySettings;
}

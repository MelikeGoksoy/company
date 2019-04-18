import { OnInit } from '@angular/core';
import { ICompanySettings } from '../models/company';
import { SettingsService } from '../services/settings.service';
export declare class CompanySettingsComponent implements OnInit {
    private _setService;
    settings: ICompanySettings;
    constructor(_setService: SettingsService);
    ngOnInit(): void;
    fetchSettings(): void;
}

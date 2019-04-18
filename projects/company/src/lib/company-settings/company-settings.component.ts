import { Component, OnInit } from '@angular/core';
import { ICompanySettings } from '../models/company'
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.css']
})
export class CompanySettingsComponent implements OnInit {
  settings: ICompanySettings;
  constructor(private _setService: SettingsService) { }

  ngOnInit() {
    this.fetchSettings();
  }
  fetchSettings() {
    this.settings = this._setService.getSettings()
    console.log('settings: ' + this.settings);
  }
}

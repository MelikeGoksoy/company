import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, from } from 'rxjs';
import { find, first, filter, map, delay, concatMap } from 'rxjs/operators';

import { ICompanySettings } from '../models/company';

const settings:ICompanySettings = {
  "data": ["Şirket İsmi", "Şirket Adresi", "Telefon No.", "E-Mail", "Kullanıcı Sayısı"]
}

@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) { }

  getSettings(): ICompanySettings {
    return settings;
  }

}


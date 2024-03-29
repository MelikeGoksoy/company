import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, from } from 'rxjs';
import { find, first, filter, map, delay, concatMap } from 'rxjs/operators';
import { Company } from '../models/company';

const companies = [
  {
    "id": 1,
    "name": "Cantek",
    "address": "adres1",
    "users": [
      {
        "id": "1",
        "name": "Hüseyin",
        "surname": "Çöl",
        "phonenumber": "567",
        "mail": "asda@gmail.com"
      },
      {
        "id": "2",
        "name": "Ahmet",
        "surname": "Yokolmaz",
        "phonenumber": "0908",
        "mail": "asda@gmail.com"
      },
      {
        "id": "3",
        "name": "Kemal",
        "surname": "Kel",
        "phonenumber": "567",
        "mail": "asda@gmail.com"
      },
      {
        "id": "4",
        "name": "Senem",
        "surname": "Sen",
        "phonenumber": "0908",
        "mail": "asda@gmail.com"
      }
    ]
  },
  {
    "id": 2,
    "name": "Ice World",
    "address": "adres2",
    "users": [
      {
        "id": "1",
        "name": "Ali",
        "surname": "Çelik",
        "phonenumber": "333",
        "mail": "a@gmail.com"
      },
      {
        "id": "2",
        "name": "Hacı",
        "surname": "Lokman",
        "phonenumber": "444",
        "mail": "h@gmail.com"
      }
    ]
  },
   {
    "id": 3,
    "name": "Biobest",
    "address": "adres3",
    "users": [
      {
        "id": "1",
        "name": "Melike",
        "surname": "Göksoy",
        "phonenumber": "567",
        "mail": "asda@gmail.com"
      },
      {
        "id": "2",
        "name": "Canberk",
        "surname": "Ardıç",
        "phonenumber": "0908",
        "mail": "asda@gmail.com"
      }
    ]
  },
  {
    "id": 4,
    "name": "Sagun",
    "address": "adres4",
    "users": [
      {
        "id": "1",
        "name": "Cem",
        "surname": "Topkaya",
        "phonenumber": "333",
        "mail": "a@gmail.com"
      },
      {
        "id": "2",
        "name": "Leyla",
        "surname": "Ley",
        "phonenumber": "444",
        "mail": "h@gmail.com"
      }
    ]
  }
]

@Injectable()
export class CompanyService {
  
  constructor(private http: HttpClient) {}

  getCompany(id: number): Observable<Company[]> {
    console.log('gelen id:', id);
    return this.temp_getCompany(id);
  }

  temp_getCompany(id: number): any {
    return from(companies).pipe(
      delay(1)
    );
  }

  temp_getCompany1(id: number): any {
    return from(companies);
  }

  getCompanies(): Observable<any> {
    return from(companies);
  }
}

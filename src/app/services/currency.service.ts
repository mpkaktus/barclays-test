import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currenciesUrl = 'https://api.exchangeratesapi.io/';

  constructor(private http: HttpClient) {
  }

  getCurrencies(date: string, base: string): Observable<>{
    return this.http.get(this.currenciesUrl + date + '?base=' + base);
  }
}

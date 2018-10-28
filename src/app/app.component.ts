import { Component } from '@angular/core';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Exchange rates';
  baseCurrencies = ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY'];
  response: any;
  rates = [];

  constructor(private currencyService: CurrencyService) {
  }

  displayExchangeRates(parameters) {
    this.currencyService.getCurrencies(parameters.date, parameters.base).subscribe(
      response => {
        this.response = response;
        this.rates = Object.entries(this.response.rates).sort();
      });
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input()
  baseCurrencies: string[];

  @Input()
  rates = [];

  isBaseCurrency(currency: string) {
    return this.baseCurrencies.indexOf(currency) > -1;
  }

  sortCurrencies() {
    this.rates.reverse();
  }
}

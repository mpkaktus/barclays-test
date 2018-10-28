import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  selectedBaseCurrency: string;
  selectedDate: string;

  @Input()
  baseCurrencies: string[];

  @Output()
  displayRequest  = new EventEmitter<Parameters>();

  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.selectedBaseCurrency = this.baseCurrencies[0];
    this.selectedDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  onDisplay() {
    let parameters = new Parameters();
    parameters.base = this.selectedBaseCurrency;
    parameters.date = this.selectedDate;
    this.displayRequest.emit(parameters);
  }

}

class Parameters {
  base: string;
  date: string;
}

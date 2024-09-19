import { Component } from '@angular/core';
import { LengthConverterService } from '../services/length-converter.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputValue: number = 1;
  fromUnit: number = 4; // Default to meters
  toUnit: number = 4;   // Default to meters
  result: number = 0;

  constructor(private lengthConverterService: LengthConverterService) {}

  convert() {
    this.result = this.lengthConverterService.convert(this.inputValue, this.fromUnit, this.toUnit);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LengthConverterService {
  private unitConversions: { [key: number]: number } = {
    7: 1000,
    6: 100,
    5: 10, 
    4: 1,
    3: 0.1,
    2: 0.01,
    1: 0.001 
  };

  convert(value: number, fromUnit: number, toUnit: number): number {
    // Convert input value to meters first
    const valueInMeters = value * this.unitConversions[fromUnit];

    // Convert from meters to the target unit
    return valueInMeters / this.unitConversions[toUnit];
  }
}

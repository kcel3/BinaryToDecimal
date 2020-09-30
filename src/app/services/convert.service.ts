import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor() { }
  ToBinary(decimal){
    return decimal;
  }

  ToDecimal(binary){
    return parseInt(binary,2);
}
  
}

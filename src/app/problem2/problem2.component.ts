import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

interface Operation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-problem2',
  templateUrl: './problem2.component.html',
  styleUrls: ['./problem2.component.scss']
})

export class Problem2Component implements OnInit{
  selectedValue: string | undefined;
  binaryValue: string | undefined;

  operations: Operation[] = [
    {value: '+', viewValue: '+'},
    {value: '-', viewValue: '-'},
    {value: '*', viewValue: '*'},
    {value: '/', viewValue: '/'},
    {value: '%', viewValue: '%'}
  ];

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Problema', cols: 1, rows: 1 },
          { title: 'Exemplo', cols: 1, rows: 1 },
        ]; 
      }

      return [
        { title: 'Problema', cols: 1, rows: 1 },
        { title: 'Exemplo', cols: 1, rows: 1 },
      ];
    })
  );

  
  ngOnInit(): void {
    this.binaryValue = '0';  
  }
  

  public calc(input_value1: string, input_value2: string) {
    const value1 = this.convertToDecimal(input_value1);
    const value2 = this.convertToDecimal(input_value2);

    const decimal_result = this.switchOperation(value1, value2);

    if(decimal_result === 0) alert("SELECIONE UMA OPERAÇÃO!!!!!");

    this.binaryValue = this.convertToBinary(decimal_result);

  }

  private convertToDecimal(value: string): number{
    const num = parseInt(value, 2);
    return num;
  }

  private switchOperation(value1: number, value2: number): number{
    const operation = this.selectedValue;
    switch(operation){
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      case '%':
        return value1 % value2;
      default:
        return 0;
    }

  }

  private convertToBinary(decimal: number): string{
    return Number(decimal).toString(2);
  }
  
  constructor(private breakpointObserver: BreakpointObserver) {}  
}

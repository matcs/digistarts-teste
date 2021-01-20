import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-problem1',
  templateUrl: './problem1.component.html',
  styleUrls: ['./problem1.component.scss']
})
export class Problem1Component implements OnInit{
  sorted_numbers: number[] | undefined;
  arr_size: number | undefined;

  ngOnInit(): void {
    this.arr_size = 0;
    this.sorted_numbers = [0];
  }

  public sortValues(text: string, arr_max_size: string): void{
    let arr = this.extractNumbers(text, arr_max_size);
    arr = this.removeDoubleValues(arr);
    this.arr_size = arr.length;
    this.sorted_numbers = arr;
  }
  
  public extractNumbers(text: string, arr_size:string): number[]{
    const extractedNumbers = text.match(/-?\d+/g)!.map(Number);
    return extractedNumbers.slice(0, Number(arr_size));
  }

  public removeDoubleValues(arr: number[]): number[] {
    const uniqueArr = arr
      .filter((item, pos) => {
        return arr.indexOf(item) == pos;
      }).sort((a,b) => {
        return a-b 
      });

    return uniqueArr;
  }

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

  constructor(private breakpointObserver: BreakpointObserver) {}
  
}

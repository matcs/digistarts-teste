import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-problem1',
  templateUrl: './problem1.component.html',
  styleUrls: ['./problem1.component.scss']
})
export class Problem1Component implements OnInit{
  textArea: string | undefined;

  ngOnInit(): void {
    this.textArea = '';
  }

  public extractNumbers(text: string): void{
    const extractedNumbers = text.match(/-?\d+/g)!.map(Number);
    console.log(extractedNumbers);
  }

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Problema', cols: 1, rows: 1 },
          { title: 'Entrada', cols: 1, rows: 1 },
        ]; 
      }

      return [
        { title: 'Problema', cols: 1, rows: 1 },
        { title: 'Entrada', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
  
}

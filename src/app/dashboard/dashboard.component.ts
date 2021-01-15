import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { element } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  problems = [
    'Um conjunto não pode ter elementos repetidos. Faça um programa capaz de ler um número inteiro N (1<=N<=1000) e N inteiros K (-1000<=K<=1000). A saída deverá ser um conjunto formado pelos K inteiros. Os elementos deverão ser exibidos em ordem crescente.',
  ];

  sorted_array:number[]=[0];

  name = 'michael jackson'
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Problema',  problem:this.problems[0], cols: 1, rows: 1},
        ];
      }
      return [
          { title: 'Problema', problem:this.problems[0] ,cols: 1, rows: 1 },
      ];
    })
  );
  
  public sort_text_area(input_values: string, size_value: string) {
    const regex = /\d+/g;
    const matches = input_values.match(regex);
    let i = 0;
    let arr = [0];
    let size = parseInt(size_value);    

    matches?.forEach(element => {
        arr[i++] = parseInt(element);
    })

    if(this.checkIfSomeValueIsOutOfTheCondition(arr)){
      alert(`AVISO: numero maior que 1000 ou menor que -1000 encontrado`);
      return;
    }else{
      this.sorted_array = this.unique_value_and_sort(arr);
      this.sorted_array.length = size;
      alert(`
        Tamanho: ${size}
        \nNumeros ordenados: [${this.sorted_array}]
      `)
    }
  }

  private unique_value_and_sort(a:number[]) {
    return a.sort((a, b) => a - b)
      .filter(function(item, pos, arr) {
        return !pos || item != arr[pos - 1];
      });  
  }

  private checkIfSomeValueIsOutOfTheCondition(arr: number[]): boolean{
    for(let i = 0; i < arr.length; i++)
      if(arr[i]>1000 || arr[i]<-1000)
        return true
    return false
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'digistarts-test';

  ngOnInit(){
  }

  
  async test () {
    window.alert('clicked')
  }
  constructor(){ }

}

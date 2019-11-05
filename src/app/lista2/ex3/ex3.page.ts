import { Component, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.page.html',
  styleUrls: ['./ex3.page.scss'],
})
export class Ex3Page implements OnInit {

public color = ""

  constructor() { }

  ngOnInit() {
  }

  classe(){
    return{
      green: this.color == "green",
      blue: this.color == "blue",
      red: this.color == "red"
    }
  }

  onClick(cor: string){
    this.color = cor
  }
  
}

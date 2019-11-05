import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.page.html',
  styleUrls: ['./ex2.page.scss'],
})
export class Ex2Page implements OnInit {
  
  info = "Informe 5 Caracteres!"
  frase = ""

  constructor() { }

  ngOnInit() {
  }

}

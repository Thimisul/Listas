import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TheguardianserviceService } from './services/lista6/theguardianservice.service'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  result;
  news;
  sections = []
  
  public appPages = [
    { title: 'Lista 1',
      url: '/lista1',
      icon: 'list',
      subPages: [
        { title: 'Exercicio 1', url: '/lista1' },
        { title: 'Exercicio 2', url: '/lista1/ex2' },
        { title: 'Exercicio 3', url: '/lista1/ex3' }
      ]},   
    { title: 'Lista 2',
      url: '/lista2/ex1',
      icon: 'list',
      subPages: [
        { title: 'Exercicio 1', url: '/lista2/ex1' },
        { title: 'Exercicio 2', url: '/lista2/ex2' },
        { title: 'Exercicio 3', url: '/lista2/ex3' },
        { title: 'Exercicio 4', url: '/lista2/ex4' },
    ]},
    { title: 'Lista 3',
      url: '/lista3/ex1',
      icon: 'list'   
    },
    { title: 'Lista 4',
      url: '/lista4/ex1',
      icon: 'list'   
    },
    { title: 'Lista 5',
      url: '/lista5/ex1',
      icon: 'list'   
    },
    { title: 'Lista 6',
      url: '/lista6/ex1',
      icon: 'list',
      subPages: this.sections}
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private guardianService: TheguardianserviceService
  ) {
    this.initializeApp();
    this.guardianService.gets('sections?').subscribe( sucesso=>{
      this.result = sucesso;
      console.log(this.result)
      this.news =  this.result.response.results;
      console.log(this.news)
      for (let i = 0; i < this.news.length; i++){
        this.sections.push({
        title: this.news[i].webTitle,
        url: "/lista6/ex1",
        id: this.news[i].id
        }) 
      }
    })
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

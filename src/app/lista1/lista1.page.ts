import { Component, OnInit } from '@angular/core';
import { Lista1Service } from './lista1.service'
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lista1',
  templateUrl: './lista1.page.html',
  styleUrls: ['./lista1.page.scss']
})
export class Lista1Page implements OnInit {

  photos: Array<any>;

  pessoas = [
    { nome: "Thiago M Suliani",
      foto: "",
      pais: "Ingraterra",
      dataNascimento: "01/09/1990"},
      { nome: "Thiago M Suliani",
      foto: "" ,
      pais: "Brasil",
      dataNascimento: "23/01/1990"},
      { nome: "Thiago M Suliani",
      foto: "",
      pais: "França",
      dataNascimento: "06/05/1990"},
      { nome: "Thiago M Suliani",
      foto: "",
      pais: "Itália",
      dataNascimento: "15/04/1990"},
      { nome: "Thiago M Suliani",
      foto: "",
      pais: "Brasil",
      dataNascimento: "23/03/1990"},
      { nome: "Thiago M Suliani",
      foto: "",
      pais: "Holanda",
      dataNascimento: "12/02/1990"},
      { nome: "Thiago M Suliani",
      foto: "",
      pais: "Paraguai",
      dataNascimento: "06/12/1990"},
      { nome: "Thiago M Suliani",
      foto: "",
      pais: "Brasil",
      dataNascimento: "06/01/1990"},
      { nome: "Thiago M Suliani",
      foto: "",
      pais: "Brasil",
      dataNascimento: "06/01/1990"}];

  constructor(private activatedRoute: ActivatedRoute, private lista1Service: Lista1Service, private sanitizer: DomSanitizer) {   }

  ngOnInit() {
    this.getPhotos();
    this.getNames();
   
    }

  getNames(){
    this.lista1Service.getUsers().subscribe(dados => {
      console.log(dados)
      for (let i = 0; i < this.pessoas.length; i++) {
        this.pessoas[i].nome = dados[i].name
        console.log(this.pessoas[i].nome)
      }
    })
  }
  
  getPhotos(){
    this.lista1Service.getPhotos().subscribe(photo => {
      this.photos = photo;
      for (let i = 0; i < this.pessoas.length; i++) {
        this.pessoas[i].foto = photo[i].thumbnailUrl
        console.log(this.pessoas[i].foto)
      }  
    })
  }



public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
}
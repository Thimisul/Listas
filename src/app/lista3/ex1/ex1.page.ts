import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAtividadePage} from '../modal-atividade/modal-atividade.page'

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.page.html',
  styleUrls: ['./ex1.page.scss'],
})
export class Ex1Page implements OnInit {

  

  atividades = [
    {id: 0,
     data:"2019-11-04T21:18:52.784-03:00",
     atividade: "Trabalho",
     descricao: "Analise",
     conteudo: "Mobile",
     status: true
    },{id: 1,
      data: "2019-11-04T21:18:52.784-03:00",
      atividade: "Prova",
      descricao: "Analise",
      conteudo: "Mobile",
      status: true
     }
  ]

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }

  async addAtividade(){
    
    let novaAtividade =
    {id: 0,
     data:"",
     atividade: "",
     descricao: "",
     conteudo: "",
     status: true
    }

    novaAtividade.id = this.atividades.length;

   
    const pagina = await this.modal.create({
      component: ModalAtividadePage,
      componentProps: {atividade: novaAtividade }
    })
    await pagina.present();
    const {data} = await pagina.onDidDismiss();
    if(data.retorno != false)
    this.atividades.push(novaAtividade)
  }

  async openAtividade(id){
    const pagina = await this.modal.create({
      component: ModalAtividadePage,
      componentProps: {atividade: this.atividades[id]}
    })
    await pagina.present();

    const {data} = await pagina.onDidDismiss();
    if(data.retorno != false)
    this.atividades[data.atividade.id] = data.atividade
  }
}

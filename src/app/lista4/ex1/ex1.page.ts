import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAtividadePage} from '../modal-atividade/modal-atividade.page'
import { SqlProvider } from 'ionic-query-interface';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.page.html',
  styleUrls: ['./ex1.page.scss'],
})

export class Ex1Page implements OnInit {

  atividades = []

  constructor(public modal: ModalController, public db:SqlProvider) { 
    this.db.open('atividades.db');
    this.definirTabela();
    this.carregarAtividades();

    
  }

  ngOnInit() {
  }

  atividade= {
    id: null, 
    data:"",
    atividade: "",
    descricao: "",
    conteudo: "",
    status: "true"
   }

  async definirTabela(){
    await this.db.createTable('atividades',{
        data: 'text',
        atividade: "text",
        descricao: "text",
        conteudo: "text",
        status: 'text'
       })
  }

  async carregarAtividades(){
    const listaAtividades = await this.db.table('atividades').all();
    this.atividades =  [ ...listaAtividades]
  }

  async adicionar(novaAtividade){
    const atividade = {
      data: novaAtividade.data,
        atividade: novaAtividade.atividade,
        descricao: novaAtividade.descricao,
        conteudo: novaAtividade.conteudo,
        status: novaAtividade.status
    };
    const id = await this.db.table('atividades').insert(atividade);
    this.atividades.push({id, ... atividade})
  }

  async select(id) {
    let results = await this.db.table("atividades").select({ id: 1 });
    this.atividade.id = results[0].id;
    this.atividade.data = results[0].data;
    this.atividade.descricao = results[0].descricao;
    this.atividade.conteudo = results[0].conteudo;
    this.atividade.status = results[0].status;
    this.openAtividade(this.atividade);
}

async update(atividade) {
  await this.db.table("atividades").where(`id = ${atividade.id}`).update(atividade);
}

  async addAtividade(){

    let nova = {
      id: null, 
      data:"",
      atividade: "",
      descricao: "",
      conteudo: "",
      status: "true"
     }

    const pagina = await this.modal.create({
      component: ModalAtividadePage,
      componentProps: {atividade: nova }
    })
    await pagina.present();
    const {data} = await pagina.onDidDismiss();
    if(data.retorno != false)
    this.adicionar(nova)
  }

  async openAtividade(atividade){
    
    const pagina = await this.modal.create({
      component: ModalAtividadePage,
      componentProps: {atividade: atividade}
    })
    await pagina.present();

    const {data} = await pagina.onDidDismiss();
    if(data.retorno != false)
    this.update(atividade)
  }
}

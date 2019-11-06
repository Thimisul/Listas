import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalAtividadePage } from './../../lista5/modal-atividade/modal-atividade.page'
import { getDefaultService } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.page.html',
  styleUrls: ['./ex1.page.scss'],
})
export class Ex1Page implements OnInit {

  public userId = '';
  public atividades = [];

  public atividade = { 
    data:"",
    atividade: "",
    descricao: "",
    conteudo: "",
    status: "true"
  }

  
  constructor(private firebase: FirebaseService,
              private usuario: UsuarioService,
              private alert: AlertController,
              public modal: ModalController) {
                this.usuario.getUser().subscribe(async (user) => {this.userId = await user.id
                this.carregarAtividades() });
               }

  ngOnInit() {
  }

  async update(atividade) {
    await this.firebase.db().collection('atividades').doc(atividade.id).update({
      data: atividade.data,
      atividade: atividade.atividade,
      descricao: atividade.descricao,
      conteudo:  atividade.conteudo,
      status:  atividade.status,
      user_id: this.userId
    })
  }

  async adicionar(novaAtividade){
    await this.firebase.db().collection('atividades').add({ 
      data:novaAtividade.data,
      atividade:novaAtividade.atividade,
      descricao:novaAtividade.descricao,
      conteudo: novaAtividade.conteudo,
      status: novaAtividade.status,
      user_id: this.userId
    });

    this.atividade =  {
      data:"",
      atividade: "",
      descricao: "",
      conteudo: "",
      status: "true"
     };

    this.carregarAtividades();
  }

  async carregarAtividades(){
    const results = await this.firebase.db().collection('atividades')
                              .where('user_id', '==', this.userId)
                              .get();
    this.atividades = [];
    results.docs.forEach(doc =>{
      this.atividades.push({ id: doc.id, ...doc.data()});
    })  
  }

  async carregarTodasAtividades(){
    const results = await this.firebase.db().collection('atividades').get();
    this.atividades = [];
    results.docs.forEach(doc => {
      this.atividades.push({ id: doc.id, ...doc.data()});
    });
  }

  async addAtividade(){

    let nova = { 
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

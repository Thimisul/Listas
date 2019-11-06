import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-atividade',
  templateUrl: './modal-atividade.page.html',
  styleUrls: ['./modal-atividade.page.scss'],
})
export class ModalAtividadePage implements OnInit {

  constructor(public modal: ModalController) { }
  
  @Input() atividade: {
    id: null,
    data: "",
    atividade: "",
    descricao: "",
    conteudo: "",
    status: string
  }
  
  ngOnInit() {
  }

  close(){
    this.modal.dismiss({
      retorno: false
    })
  }

  save(){
    this.modal.dismiss({
      atividade: this.atividade
    })
  }

  delete(){
    this.atividade.status = 'false'
    this.modal.dismiss({
      atividade: this.atividade
    })
  }
}

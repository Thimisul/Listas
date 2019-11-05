import { Component, OnInit, Input } from '@angular/core';
import { ModalController, IonDatetime} from '@ionic/angular'

@Component({
  selector: 'app-modal-atividade',
  templateUrl: './modal-atividade.page.html',
  styleUrls: ['./modal-atividade.page.scss'],
})
export class ModalAtividadePage implements OnInit {


  @Input() atividade: {
    id: "",
    data: "",
    atividade: "",
    descricao: "",
    conteudo: "",
    status: boolean
  }

  constructor(public modal: ModalController) {  }

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
    this.atividade.status = false
    this.modal.dismiss({
      atividade: this.atividade
    })
  }
  
}

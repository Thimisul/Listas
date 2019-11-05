import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalAtividadePage } from './modal-atividade.page';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SqlProvider } from 'ionic-query-interface';

const routes: Routes = [
  {
    path: '',
    component: ModalAtividadePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    SQLite,
    SqlProvider
  ],
  declarations: [ModalAtividadePage]
})
export class ModalAtividadePageModule {}

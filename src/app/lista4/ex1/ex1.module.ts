import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Ex1Page } from './ex1.page';
import { ModalAtividadePage } from '../modal-atividade/modal-atividade.page'
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SqlProvider } from 'ionic-query-interface';

const routes: Routes = [
  {
    path: '',
    component: Ex1Page
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
  declarations: [Ex1Page, ModalAtividadePage],
  entryComponents: [ModalAtividadePage]
})
export class Ex1PageModule {}

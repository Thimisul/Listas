import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './guards/autenticacao.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'lista1', loadChildren: './lista1/lista1.module#Lista1PageModule' },
  { path: 'lista1/ex2', loadChildren: './lista1/ex2/ex2.module#Ex2PageModule' },
  { path: 'lista1/ex3', loadChildren: './lista1/ex3/ex3.module#Ex3PageModule' },
  { path: 'lista2/ex1', loadChildren: './lista2/ex1/ex1.module#Ex1PageModule' },
  { path: 'lista2/ex2', loadChildren: './lista2/ex2/ex2.module#Ex2PageModule' },
  { path: 'lista2/ex3', loadChildren: './lista2/ex3/ex3.module#Ex3PageModule' },
  { path: 'lista2/ex4', loadChildren: './lista2/ex4/ex4.module#Ex4PageModule' },
  { path: 'lista3/ex1', loadChildren: './lista3/ex1/ex1.module#Ex1PageModule' },
  { path: 'lista3/modalAtividade', loadChildren: './lista3/modal-atividade/modal-atividade.module#ModalAtividadePageModule' },
  { path: 'lista4/ex1', loadChildren: './lista4/ex1/ex1.module#Ex1PageModule' },
  { path: 'lista4/modalAtividade', loadChildren: './lista4/modal-atividade/modal-atividade.module#ModalAtividadePageModule' },
  { path: 'lista5/login', loadChildren: './lista5/login/login.module#LoginPageModule' },
  { path: 'lista5/ex1', loadChildren: './lista5/ex1/ex1.module#Ex1PageModule', canActivate: [AutenticacaoGuard] },
  { path: 'modal-atividade', loadChildren: './lista5/modal-atividade/modal-atividade.module#ModalAtividadePageModule' },
  { path: 'lista6/ex1', loadChildren: './lista6/ex1/ex1.module#Ex1PageModule' },
  { path: 'modal-noticia', loadChildren: './lista6/modal-noticia/modal-noticia.module#ModalNoticiaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

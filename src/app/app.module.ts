import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ConsultarAlunoComponent } from './consultar-aluno/consultar-aluno.component';
import { CadastrarProfessorComponent } from './cadastrar-professor/cadastrar-professor.component';
import { ConsultarProfessorComponent } from './consultar-professor/consultar-professor.component';
import { CadastrarTurmaComponent } from './cadastrar-turma/cadastrar-turma.component';
import { ConsultarTurmaComponent } from './consultar-turma/consultar-turma.component';
import { CadastrarMatriculaComponent } from './cadastrar-matricula/cadastrar-matricula.component';
import { ConsultarMatriculaComponent } from './consultar-matricula/consultar-matricula.component';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';


const appRoutes : Routes = [

  {path: 'cadastro-aluno', component: CadastroAlunoComponent},
  {path: 'consulta-aluno', component: ConsultarAlunoComponent},
  {path: 'cadastrar-professor', component: CadastrarProfessorComponent},
  {path: 'consultar-professor', component: ConsultarProfessorComponent},
  {path: 'cadastrar-turma', component: CadastrarTurmaComponent},
  {path: 'consultar-turma', component: ConsultarTurmaComponent},
  {path: 'cadastrar-matricula', component: CadastrarMatriculaComponent},
  {path: 'consultar-matricula', component: ConsultarMatriculaComponent},
  { path : 'cadastro-usuario', component : CadastroUsuarioComponent }, 
  { path : 'login-usuario', component : LoginUsuarioComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CadastroAlunoComponent,
    ConsultarAlunoComponent,
    CadastrarProfessorComponent,
    ConsultarProfessorComponent,
    CadastrarTurmaComponent,
    ConsultarTurmaComponent,
    CadastrarMatriculaComponent,
    ConsultarMatriculaComponent,
    CadastroUsuarioComponent,
    LoginUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

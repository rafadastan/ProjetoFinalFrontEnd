import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  mensagemProcessamento:string;
  mensagemSucesso:string;
  mensagemErro:string;

  errosNome:[];
  errosEmail:[];
  errosDataDeNascimento:[];

  apiUrl = "https://localhost:44339/api/Aluno";

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  cadastroAluno(formCadastro){
    this.mensagemProcessamento = "Processando, aguarde por favor.";
    this.mensagemErro = "";
    this.mensagemSucesso = "";

    this.errosEmail = [];
    this.errosNome = [];
    this.errosDataDeNascimento = [];

    this.httpClient.post(this.apiUrl, formCadastro.value,
      {responseType: 'text'})
        .subscribe(
        
          (result)=>{
            this.mensagemSucesso = result;
            this.mensagemErro = "";
        },
          (e)=>{

            this.mensagemProcessamento = "";

            const response = JSON.parse(e.error);
            
            if(e.status == 400){

                this.errosNome = response.errors.Nome;
                this.errosEmail = response.errors.Email;
                this.errosDataDeNascimento = response.errors.DataDeNascimento;
                
            }else if(e.status == 500){
                console.log(response);
            }
        }
      );
  }
}

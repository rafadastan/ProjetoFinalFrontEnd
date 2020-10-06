import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  mensagemProcessamento: string;
  mensagemSucesso: string;
  mensagemErro: string;

  apiUrl = "https://localhost:44339/api/Usuario";

  errosNome: [];
  errosEmail: [];
  errosSenha: [];
  errosSenhaConfirmacao: [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  cadastrarUsuario(formCadastro) {

    this.mensagemProcessamento = "Processando, por favor aguarde.";
    this.mensagemSucesso = "";
    this.mensagemErro = "";

    this.errosNome = [];
    this.errosEmail = [];
    this.errosSenha = [];
    this.errosSenhaConfirmacao = [];

    this.httpClient.post(this.apiUrl, formCadastro.value,
      { responseType: 'text' })
      .subscribe(
        (result) => {
          this.mensagemProcessamento = "";
          this.mensagemSucesso = result;

          formCadastro.reset();

        },
        (e) => {
          this.mensagemProcessamento = "";

          const response = JSON.parse(e.error);

          if (e.status == 400) {

            this.errosNome = response.errors.Nome;
            this.errosEmail = response.errors.Email;
            this.errosSenha = response.errors.Senha;
            this.errosSenhaConfirmacao = response.errors.SenhaConfirmacao;

          } else if (e.status == 403) {

            this.mensagemErro = e.error;

          } else if (e.status == 500) {

            this.mensagemErro = response.error;
            
          }
        }
      );
  }
}

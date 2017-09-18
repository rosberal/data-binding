import { Component, OnInit } from "@angular/core";
//import { FormsModule }   from '@angular/forms';
@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"]
})
export class DataBindingComponent implements OnInit {
  url: string = "http://loiane.com";
  cursoAngular: boolean = true;
  urlImagem: string = "http://lorempixel.com/400/200/nature/";
  valorAtual: string = ``;
  valorSalvo: string = ``;
  isMouseOver: boolean = false;
  nome: string = "abc";
  pessoa: any = {
    nome: "def",
    idade: 20
  };
nomeDoCurso:string='Angular';
valorInicial=15;
constructor() {}

  ngOnInit() {}

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
  botaoClicado() {
    alert("Botão Clicado!");
  }

  onKeyUp(evento) {
    //console.log(evento);
    this.valorAtual = evento;
  }

  salvarValor(evento) {
    this.valorSalvo = evento;
  }

  mouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

onMudouValor(evento){
console.log(evento);

}


}

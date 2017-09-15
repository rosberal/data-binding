import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

url: string='http://loiane.com';
cursoAngular: boolean =true
urlImagem: string='http://lorempixel.com/400/200/nature/'
valorAtual: string=``;
valorSalvo: string=``;
isMouseOver:boolean=false;
constructor() { }

  ngOnInit() {}

getValor(){
  return 1;
}

getCurtirCurso(){
return true;
}
botaoClicado(){
  alert('Botão Clicado!');
}

onKeyUp(evento){
//console.log(evento);
this.valorAtual=evento;
}

salvarValor(evento){
this.valorSalvo=evento;
}

mouseOverOut(){

this.isMouseOver=!this.isMouseOver
}


}

import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit, OnDestroy, Input
} from "@angular/core";

@Component({
  selector: "app-ciclo",
  templateUrl: "./ciclo.component.html",
  styleUrls: ["./ciclo.component.css"]
})
export class CicloComponent
  implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked,
    AfterViewInit,
    OnDestroy {
 @Input() valorInicial: number = 10;

  constructor() {}

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }


  mudarValor() {
    this.valorInicial++;
  }
}

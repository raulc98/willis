import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  esForm = false;

  ngOnInit(): void {
  }

  btn_registro() {
    this.esForm = true;
  }

  cerrar_ventana(){
    this.esForm = false;
  }
}

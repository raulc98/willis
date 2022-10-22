import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {

  constructor() { }
  esForm = true;
  ngOnInit(): void {
    this.esForm = true;
  }

  btn_registro(){
    this.esForm = false;
  }
}

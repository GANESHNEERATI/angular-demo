import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent  {

  constructor() { }

  log(x)
  {

    console.log(x);
  }
  submit(f)
  {

    console.log(f);
  }

  
}
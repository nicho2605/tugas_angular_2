import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  jurus;
  deskrip;
  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
    
  }
}
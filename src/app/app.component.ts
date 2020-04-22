import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  listJurusan =[];
  temp = [];
  constructor(private router:Router){}
  inputpage(){
    this.router.navigate(['/input']);
  }
  listpage(){
    this.router.navigate(['/list']);
  }
  editpage(){
    this.router.navigate(['/edit']);
  }
  input(jur,desk){
    this.temp = [jur,desk];
    this.listJurusan.push(this.temp);
  }
  getList(){
    return this.listJurusan;    
  }
  edit(jur,desk){
    for(let i = 0;i<this.listJurusan.length;i++)
    {
      if(this.listJurusan[i][0] == jur)
      {
        this.listJurusan[i][1] = desk;
      }
    }
  }
}

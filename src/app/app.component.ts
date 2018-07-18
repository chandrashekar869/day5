import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  date:Date=new Date();
  num:number=3.1445667;
  variant=[1000,2000,2100];
  obj=[{name:"Masserati",type:"car"},{name:"Yamaha",type:"bike"},{name:"Carerra",type:"car"},{name:"CBR",type:"bike"}];
  datain:string="";
  type:string="";
  submit(){
    this.obj.push({name:this.datain,type:this.type});
    console.log(this.obj);
  }
  constructor(){
    }
}

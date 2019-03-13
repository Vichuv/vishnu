import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vishnu-app';
  name : any;
  empid : any;
  type: any;
  array: any = [];
  edit: boolean = false;
  index: any;


  onclick() {
    console.log(this.name,this.empid,this.type);
    if(this.edit == true) {
      this.array[this.index].name =  this.name;
      this.array[this.index].empid =    this.empid;
      this.array[this.index].type =    this.type;
      }
    if(this.edit == false) {
    var obj = {'name':this.name, 'empid': this.empid, 'type':this.type}
    this.array.push(obj);
   }
   this.name = '';
   this.empid = '';
   this.type = '';
   this.edit= false;

    
  }
  Edit(val,i) {
    console.log(val)
    this.name = val.name;
    this.empid = val.empid;
    this.type = val.type;
    this.edit = true
    this.index = i;

  }

  Delete(i) {
    if (confirm("Do you want to delete this column?")) {
      this.array.splice(i,1)
    } else {

    }

    }
}

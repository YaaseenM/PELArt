import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ // Known as the 'root component' - required.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pelart';

  constructor(
    private http:HttpClient
  ){}
  name:string="";
  file:any=null;
  getName(name:string){
    this.name=name;
  }

  getFile(event:any){
    this.file=event.target.files[0];
    console.log('file', this.file);
  }

  submitData(){
      let fd=new FormData();
      fd.set("name",this.name)
      fd.set("file",this.file)

      //Doesnt work, requires api from backend
      this.http.post('http://localhost:4200/fileupload', fd).subscribe(
        (response)=>{

        }

      )
  }
}

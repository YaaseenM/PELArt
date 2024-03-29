import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public signupForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router,){
  }
  ngOnInit(): void{
    this.signupForm=this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:['']
    })
  }
  signUp(){
    this.http.post<any>("/api/newsfeed",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup Sucessful");
      this.signupForm.reset();
      this.router.navigate(['login']);

    },err=>{
      alert("Something went wrong")
    }
    
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  alert:string="";
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  checkUser(loginRef:any){

    let user = loginRef.user;
    let pass = loginRef.pass;
    let obj = JSON.parse(sessionStorage.getItem("User"));
    if(user == obj[0].userName && pass == obj[0].password ){
      this.alert = "Valid Credentials"
      this.router.navigate(["portfolio"]);
      
    } 
    else{
      this.alert = "Invalid Credentials";
    }   

    

  }
  registrationForm(){
    this.router.navigate(["signup"]);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent implements OnInit {

  userArray:Array<object> = [];
  
  msg:string="";
  constructor() { }

  ngOnInit(): void {
  }

  registerUser(userInfo:any){
    let obj:object = {firstName:userInfo.fname, lastName:userInfo.lname, userName:userInfo.user, password:userInfo.pass};
    this.userArray.push(obj);
    
    sessionStorage.setItem("User",JSON.stringify(this.userArray));
    this.msg = "Successfully Register";
    
    
  }
}

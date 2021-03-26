import { Component, OnInit } from '@angular/core';
import { User } from '../portfolio.module';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent implements OnInit {

  
  TableInfo:Array<User> = new Array();
 
  flag:boolean = false;
  username:string = "";
  constructor() {
    
   }

  ngOnInit(): void {
  }

  Print():string{
    let obj = JSON.parse(sessionStorage.getItem("User"));
    this.username = obj[0].userName;
    return this.username;
  }
  displayTable(info:any){
    
    let names = info.fullname;
    let num = JSON.stringify(info.num);
    let obj = new User(names,num);
    this.TableInfo.push(obj);
    console.log(this.TableInfo);
    this.flag = true;
    
  }
}

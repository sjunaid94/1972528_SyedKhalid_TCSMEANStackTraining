import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable, observable } from 'rxjs';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http:HttpClient) { }
  
  
  loadEmployeeDetails():Observable<Task[]>{
    return this.http.get<Task[]>("http://localhost:3000/task");
}
storeEmployee(task:any){
  this.http.post("http://localhost:3000/task",task).subscribe(result=>console.log(result),error=>console.log(error));
  
}
}

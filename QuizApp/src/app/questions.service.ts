import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from './questions.model';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor( public http:HttpClient) { }
  loadQuestionsDeatails():Observable<Questions[]>{
    return this.http.get<Questions[]>("/assets/questions.json");
}

}

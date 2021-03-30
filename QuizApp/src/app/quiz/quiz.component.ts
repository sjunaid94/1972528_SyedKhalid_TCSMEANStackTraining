import { Component, OnInit } from '@angular/core';
import { Questions } from '../questions.model';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz:Array<Questions>=[];
  currentQuestion:number = 0;
  radioClicked:boolean = false;
  numberOfCorrectAnswers:number = 0;
  numberOfIncorrectAnswers:number = 0;
  result:boolean = false;
  color:string = "white";
  correctAnswer:boolean = false;
  display:boolean = false;
  answer:string = "";
  displayQuiz:boolean = false;
  clicked:boolean = false;
  points:number = 0;
  resultMsg:string = "";

  constructor(public ques:QuestionsService) { }

  ngOnInit(): void {
    this.ques.loadQuestionsDeatails().subscribe(result=>this.quiz=result);
  }
  Display():void{
    console.log(this.quiz);
  }
  onAnswer(isAnswer:boolean):void{
    
    this.radioClicked = true;
    setTimeout(() => {
      this.display = true;
    }, 1000);
    setTimeout(() => {
      this.display = false;
      if(this.currentQuestion<this.quiz.length){this.currentQuestion+=1;}
      this.radioClicked = false;
      this.color = "white";
      document.body.style.backgroundColor = this.color;
     
      this.correctAnswer = false;
    }, 4000);
   
    if(isAnswer){
      this.numberOfCorrectAnswers++;
      this.color = "green";
      document.body.style.backgroundColor = this.color;
      this.answer = "Right!";
     
    
      
    }
    else{
      this.numberOfIncorrectAnswers++;
      this.color = "red";
      document.body.style.backgroundColor = this.color;
      this.answer = "Wrong!";
      
      
    }
    
  }
  displayResult():void{
    this.result = true;
    this.points = (this.numberOfCorrectAnswers)/(this.numberOfCorrectAnswers+this.numberOfIncorrectAnswers);
    this.points = this.points * 100;
    if(this.points > 70){
      this.resultMsg = "Pass";
    }
    else{
      this.resultMsg = "Fail";
    }
    
  }
  startQuiz():void{
    this.displayQuiz = true;
    this.clicked = true;
  }
}

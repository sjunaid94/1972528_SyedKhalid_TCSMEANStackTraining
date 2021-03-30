export class Questions{
    //constructor(public syed:Array<{id:number,name:string,options:Array<{id:number,  questionId:number, name:string,isAnswer:boolean}>}>){}
    constructor(public id:number, public name:string, public options:Array<{id:number,questionId:number,answer:string,isAnswer:boolean}>){}
}
let http = require("http");
let url = require("url");
let fs = require("fs");
let port = 9000;
let taskInfo = `
    <form action="/addTask" method="get">
    <!-- if method is get then your data will get append through url... and when you hit submit it looks for the action -->
    <label >Employee ID: </label>
    <input type="text" name="id" ><br>
    <label >Task ID: </label>
    <input type="text" name="taskId"><br>

    <label>Task: </label>
    <input type="text" name="task"/>

    <label>Deadline: </label>
    <input type="date" name="date"/>

    <br>
    <input type="submit" value="Add" >
    <input type="reset" value="Reset it" >
    </form>

`
let taskAdded = `
    <div>
        <h2>Task added succesfully!!</h2>
        <form action="/displayTask">
            
            <input type="submit" value="Display Tasks">

        </form> 
    </div>
    `
 let deleteTask = `
    <hr><div>
        <form action="/deleteTask">

            <label>Delete Task: </label>
            <input type="text" name="delId" />
            <input type="submit" value="Delete Task">

        </form> 
    </div>
    `
var taskArr = [];


let server = http.createServer((req,res)=>{
    let pathInfo = url.parse(req.url,true).pathname;
    
    if(pathInfo=="/"){
        res.setHeader("content-type","text/html");
        res.end(taskInfo);

    }else if(pathInfo=="/addTask"){
        var emp = {

            empID: String,
            taskId:String,
            task:String,
            date:String,
        
        };
        
        res.setHeader("content-type","text/html");
        res.end(taskAdded);
        var data = url.parse(req.url,true).query;
        emp.empID = data.id;
        emp.taskId = data.taskId;
        emp.task = data.task;
        emp.date = data.date;
        taskArr.push(emp);
      
        console.log(JSON.stringify(taskArr));
        fs.writeFileSync("task.json",JSON.stringify(taskArr));

    }else if(pathInfo=="/displayTask"){
        var jsonFile = './task.json';
        if (fs.existsSync(jsonFile)){
           let taskRead=  fs.readFileSync("task.json");
           let taskObj = JSON.parse(taskRead);
           console.log(taskObj);
           var tableData = `
                <table border ="1">
                    <tr>
                        <th>Employee ID</th>
                        <th>Task ID</th>
                        <th>Task</th>
                        <th>Deadline</th>
                    </tr>
           `
                taskObj.forEach(element => {
                    tableData+=`
                        <tr>
                            <td>${element.empID}</td>
                            <td>${element.taskId}</td>
                            <td>${element.task}</td>
                            <td>${element.date}</td>
                        </tr>                    
                    `

                });
            tableData+=`</table>`
            // res.end(tableData);
        }else{
            console.log("Please create a new file");
        }
        tableData+=` <hr><div>
        <form action="/deleteTask">

            <label>Delete Task: </label>
            <input type="text" name="delId" />
            <input type="submit" value="Delete Task">

        </form> 

    </div>`
        res.end(tableData);
    }else if(pathInfo=="/deleteTask"){

        var datas = url.parse(req.url,true).query;
        
        var j =0;
        let flag= 0;
        taskArr.find((c,i)=>{
            if(c.taskId==datas.delId){
                j=i;
                flag++;
            }
        });
        if(flag == 0){
            res.end("Task ID is invalid");
        }else{
            taskArr.splice(j,1);
            fs.writeFileSync("task.json",JSON.stringify(taskArr));
            res.setHeader("content-type","text/html");
            res.end(taskInfo);
             
        }
    }
    
});

server.listen(port,()=>console.log(`Server is running on port ${port}`));
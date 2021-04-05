
let logRecords = ()=>{
    let obj = require("readline-sync");
    let fs = require("fs");
    let emp = {
        firstName: String,
        lastName:String,
        gender:String,
        email: String,
        date:String,
        time: Number

    };
    let data = new Array();
    let records = obj.question("How many questions do you want to store? ");
    debugger;
    for (let i = 1; i<= records; i++){
        var today = new Date();
        var times = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
        debugger;
        emp.firstName = obj.question(`Enter the first Name of Employee #${i} `);
        debugger;
        emp.lastName = obj.question(`Enter the last name of Employee #${i} `);
        debugger;
        emp.gender = obj.question(`Enter the gender of Employee #${i} `);
        debugger;
        emp.email = obj.question(`Enter the email of Employee #${i} `);
        debugger;
        emp.time = times;
        debugger;
        emp.date = date;
        debugger;
        data.push(emp);
        
        
    }
    console.log(JSON.stringify(data));
    fs.writeFileSync("data.json",JSON.stringify(data),{flag:"a"});
};
exports.log = logRecords;

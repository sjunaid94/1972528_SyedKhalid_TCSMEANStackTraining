let fs = require("fs");
let obj = require("mongoose");
obj.Promise = global.Promise;
let url = "mongodb://localhost:27017/meanstack";
const mongoDbOption = { useUnifiedTopology: true,  useNewUrlParser: true }
obj.connect(url,mongoDbOption); //ready to connect
let db = obj.connection; //connect to database
db.on("error", (err)=>console.log(err));

//var size = Object.keys(empJson).length;
db.once("open",()=>{
    let ProductSchema = obj.Schema({ //schema is part of obj not db
        _id:Number,
        source:Number,
        destination:Number,
        sourceLocation:String,
        callDuration:String,
        roaming:String,
        callCharge:Number

    });
    let callLog = obj.model("",ProductSchema,"CallRecord") 

    fs.readFile("call_data.json",(err,data)=>{


        if(!err){
    
            
            let empString = data.toString();
            let empJson = JSON.parse(empString);
            for(let i =0; i<empJson.length; i++){
                let callRecord = new callLog({_id:empJson[i]._id,source:empJson[i].source,destination:empJson[i].destination,sourceLocation:empJson[i].sourceLocation,callDuration:empJson[i].callDuration,roaming:empJson[i].roaming,callCharge:empJson[i].callCharge})
                callRecord.save((result,err)=>{
                    if(!err){
                        console.log("record inserted succefully  "+result);
                    }
                    else{
                        console.log(err);
                    }
                    obj.disconnect();
                });
            }

        }  
        
    });
    
});
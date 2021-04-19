let app = require("express")();
let bodyParser = require("body-parser");
let port = 9090;
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());  
let obj = require("mongoose"); //load the module
obj.Promise=global.Promise  //creaating the reference
let url = "mongodb://localhost:27017/meanstack";
const mongoDbOption = { useUnifiedTopology: true,   useNewUrlParser: true } 
obj.connect(url,mongoDbOption); //ready to connect
let db = obj.connection; //connect to database
db.on("error", (err)=>console.log(err));
db.once("open",()=>{

    let CourseSchema = obj.Schema({ 
        _id:Number,
        courseName:String,
        description:String,
        amount:Number
    });
  
    let Course = obj.model("",CourseSchema,"Course") 

    app.get("/", function (request, response){
    
        response.sendFile(__dirname+"/index.html");
    });
    
    app.get("/addCourse", function (request, response){
        response.sendFile(__dirname+"/addCourse.html");
    });

    app.get("/updateCourse", function (request, response){
        response.sendFile(__dirname+"/updateCourse.html");
    });
    app.get("/deleteCourse", function (request, response){
        response.sendFile(__dirname+"/deleteCourse.html");
    });
    app.get("/fetchCourse", function (request, response){
        response.sendFile(__dirname+"/fetchCourse.html");
    });
    app.post("/addCourses",(req,res)=>{
     
        let addCourse1 = new Course({_id:req.body.id,courseName:req.body.name,description:req.body.desc,amount:req.body.amt})
        addCourse1.save((err,result)=>{

            if(!err){
                console.log("Record inserted successfully... ");
            }else{
                console.log(err);
            }
            obj.disconnect(); 

        })
        res.send("Post method called...")
    })

    app.post("/updateCourses",(req,res)=>{

        Course.updateOne({_id:req.body.id},{$set:{amount:req.body.amt}},(err,result)=>{

            if(!err){
                console.log("Record updated successfully... "+result);
            }else{
                console.log(err);
            }
            obj.disconnect(); 

        })
        res.send("Update method called...")
    })

    app.post("/deleteCourses",(req,res)=>{

        Course.deleteOne({_id:req.body.id},(err,result)=>{

            if(!err){
                console.log("Record Deleted successfully... "+result);
            }else{
                console.log(err);
            }
            obj.disconnect(); 

        })
        res.send("Delete method called...")
    })


    app.get("/fetchCourses",(req, res)=>{
       
        Course.find({},(err,result)=>{
            if(!err){
                res.send(result);
            }else{
                console.log(err);
            }
            obj.disconnect(); 

        })
        
    });
})

app.listen(port,()=>console.log(`Server is running on port ${port}`));
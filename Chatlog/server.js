let app = require('express')();
let http = require("http").Server(app); //  to load the library we have run port number using http module
let io = require('socket.io')(http);  // socket io is based on http...
let obj = require("mongoose"); //load the module
obj.Promise=global.Promise  //creaating the reference
let url = "mongodb://localhost:27017/meanstack";
const mongoDbOption = { useUnifiedTopology: true,   useNewUrlParser: true } 
obj.connect(url,mongoDbOption); //ready to connect
let db = obj.connection; //connect to database
db.on("error", (err)=>console.log(err));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
let ChatSchema = obj.Schema({ 
    name:String,
    message:String
    
});
// Creating model
let Chat = obj.model("",ChatSchema,"Chat") 

io.on("connection",(socket)=>{
    console.log("client connected to application.......");
    socket.on("chat",({names,msg})=>{ 
        console.log("Hello " +names);
        console.log("Message: "+msg);
        let addChat  = new Chat({name:names,message:msg});
        addChat.save((err,result)=>{
            if(!err){
                console.log("added..."+'\n')
            }else{
                console.log(err)
            }
        })
    })
})
http.listen(9090,()=>console.log("Server is running on 9090"));
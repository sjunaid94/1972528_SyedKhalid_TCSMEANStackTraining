let app = require('express')();
let http = require("http").Server(app); //  to load the library we have run port number using http module
let io = require('socket.io')(http);  // socket io is based on http...


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

io.on("connection",(socket)=>{
    console.log("client connected to application.......");

    //both variable has to match
    socket.on("chat",({names,msg})=>{ //key should match from index.html page.... here it is chat message
        console.log("Hello " +names);
        console.log("Message: "+msg+'\n');
    })
})
http.listen(9090,()=>console.log("Server is running on 9090"));
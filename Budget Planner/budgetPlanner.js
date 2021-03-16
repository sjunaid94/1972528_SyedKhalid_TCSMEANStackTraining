var clientInfo = []

function AddClient(){
    var clientObj = {}
    clientObj.clientName = document.getElementById("clientName").value;
    clientObj.projectName = document.getElementById("projectName").value;
    clientObj.budget = document.getElementById("budget").value;
    console.log(clientObj);

    if(sessionStorage.getItem("projectInfo")){
        
        var obj = JSON.parse(sessionStorage.getItem("projectInfo"));
        sessionStorage.removeItem("projectInfo");
        clientInfo = obj
        clientInfo.push(clientObj);

    }
    else{
        clientInfo.push(clientObj);
    }
    
    storeClient();
  

}


function storeClient(){
    
    //clientInfo.push(clientObj);
    sessionStorage.setItem("projectInfo", JSON.stringify(clientInfo));
    resetData();
}
function resetData(){

    document.getElementById("clientName").value = "";
    document.getElementById("projectName").value="";
    document.getElementById("budget").value="";

}
function Clear(){
    
    
    document.getElementById("clientName").value = "";
    document.getElementById("projectName").value="";
    document.getElementById("budget").value="";
}


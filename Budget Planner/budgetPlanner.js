var clientInfo = []

function AddClient(){
    var clientObj = {}
    clientObj.clientName = document.getElementById("clientName").value;
    clientObj.projectName = document.getElementById("projectName").value;
    clientObj.budget = document.getElementById("budget").value;
    console.log(clientObj);
    if(sessionStorage.getItem("projectInfo_1")){
        var obj = JSON.parse(sessionStorage.getItem("projectInfo_1"));
        sessionStorage.removeItem("projectInfo");
        clientInfo.push(obj);
        clientInfo.push(clientObj);
        sessionStorage.removeItem("projectInfo_1");
        sessionStorage.clear();
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


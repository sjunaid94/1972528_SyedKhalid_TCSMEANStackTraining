var articleInfo = []

function addBlog(){

    var articleObj = {}
    articleObj.title = document.getElementById("title").value;
    articleObj.desc = document.getElementById("desc").value;
    articleObj.imageInfo = document.getElementById("imageId").files[0].name;
    console.log(articleObj);
    articleInfo.push(articleObj)
    storeArticle();
    
    // document.getElementById("titleInfo").innerHTML=title;
    // document.getElementById("descInfo").innerHTML=desc;
    // document.getElementById("imageInfo").src=imageInfo;
}

function storeArticle(){
    sessionStorage.setItem("blogObj", JSON.stringify(articleInfo));
    resetData();
}

function resetData(){

    document.getElementById("title").value = "";
    document.getElementById("desc").value="";
    document.getElementById("imageId").value="";
    var obj = JSON.parse(sessionStorage.getItem("blogObj"));
    insertNewRecord(obj);

}



function insertNewRecord(data){

    
    for(i =0; i<data.length;i++){
        
        var x = data[i].title;
        var y = data[i].desc;
        var z = data[i].imageId;
        
        var newDiv = document.createElement("div"); 
        var newContent = document.createTextNode(x); 
        newDiv.appendChild(newContent);  
        var currentDiv = document.getElementById("titleInfo"); 
        document.body.insertBefore(newDiv, currentDiv);
        
        var newDiv_1 = document.createElement("div_1"); 
        var newContent_1 = document.createTextNode(y); 
        newDiv_1.appendChild(newContent_1);  
        var currentDiv_1 = document.getElementById("descInfo"); 
        document.body.insertBefore(newDiv_1, currentDiv_1);

        var newDiv_2 = document.createElement("div_2"); 
        var newContent_1 = document.createTextNode(z); 
        newDiv_2.appendChild(newContent_1);  
        var currentDiv_2 = document.getElementById("imageInfo"); 
        document.body.insertBefore(newDiv_2, currentDiv_2);
        
    }
}
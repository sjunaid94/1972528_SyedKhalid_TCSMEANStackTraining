var articleInfo = []

function addBlog(){

    var articleObj = {}
    articleObj.title = document.getElementById("title").value;
    articleObj.desc = document.getElementById("desc").value;
    articleObj.imageInfo = document.getElementById("imageId").files[0].name;
    console.log(articleObj);
    articleInfo.push(articleObj)
    storeArticle();

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
    articleInfo.pop();

}


function insertNewRecord(data){

    for(i =0; i<data.length;i++){
        
        var title = data[i].title;
        var desc = data[i].desc;
        var img = data[i].imageInfo;

        var containerDiv = document.createElement("div");
        containerDiv.id = "create";
        containerDiv.className="container"
        const currentDiv = document.getElementById("lastDiv");
        document.body.insertBefore(containerDiv, currentDiv);
        
        
        var newDiv = document.createElement("div"); 
        newDiv.className = "titleInfo";
        newDiv.innerHTML = title;
        document.getElementById("create").appendChild(newDiv);

        var newDiv_1 = document.createElement("div");
        newDiv_1.className = "descInfo"; 
        newDiv_1.innerHTML = desc;
        document.getElementById("create").appendChild(newDiv_1);

        var newDiv_2 = document.createElement("img"); 
        newDiv_2.className = "imageInfo";
        newDiv_2.src = img;
        document.getElementById("create").appendChild(newDiv_2);

        var newdiv_3 = document.createElement("hr");
        newdiv_3.className = "lineBreak";
        document.getElementById("create").appendChild(newdiv_3);


        
    }
}
let cartItems:Array<object> = [];
interface CartItems{
    productName: string;
    productPrice: string;
}
function addProduct(itemName:string,itemPrice:string):void{

    let cartobj:CartItems={productName:itemName,productPrice:itemPrice};
    cartItems.push(cartobj);
    document.getElementById("myOrder").innerHTML= JSON.stringify(cartItems.length);

    sessionStorage.setItem("checkoutItems",JSON.stringify(cartItems));


}

function insertRecord(){
    let obj = JSON.parse(sessionStorage.getItem("checkoutItems"));

    let table = document.getElementById("itemsList");
    let body = table.getElementsByTagName("tbody")[0];
    let totalPrice = 0;


    for(let i =0; i<obj.length;i++){
        
        let x = obj[i].productName;
        let y = obj[i].productPrice;
        totalPrice += parseInt(y,10);
        let newRow = body.insertRow();
        let cell1 = newRow.insertCell(0);  
        cell1.innerHTML= x;                
        let cell2 = newRow.insertCell(1); 
        cell2.innerHTML=y;         
       
    }
    document.getElementById("totalPrice").innerHTML = "$" + JSON.stringify(totalPrice);

}
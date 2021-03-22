var cartItems = [];
function addProduct(itemName, itemPrice) {
    var cartobj = { productName: itemName, productPrice: itemPrice };
    cartItems.push(cartobj);
    document.getElementById("myOrder").innerHTML = JSON.stringify(cartItems.length);
    sessionStorage.setItem("checkoutItems", JSON.stringify(cartItems));
}
function insertRecord() {
    var obj = JSON.parse(sessionStorage.getItem("checkoutItems"));
    var table = document.getElementById("itemsList");
    var body = table.getElementsByTagName("tbody")[0];
    var totalPrice = 0;
    for (var i = 0; i < obj.length; i++) {
        var x = obj[i].productName;
        var y = obj[i].productPrice;
        totalPrice += parseInt(y, 10);
        var newRow = body.insertRow();
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = x;
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = y;
    }
    document.getElementById("totalPrice").innerHTML = "$" + JSON.stringify(totalPrice);
}

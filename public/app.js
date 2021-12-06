var products = document.getElementById("products");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
function add() {
    if(input1.value.toLowerCase()== "car" || 
    input1.value.toLowerCase()== "bike" ||
    input1.value.toLowerCase()== "shoes" ||
    input1.value.toLowerCase()== "watch" ||
    input1.value.toLowerCase()== "coat" || 
    input1.value.toLowerCase()== "perfume" ){
    var div = document.createElement("div");
    var para1 = document.createElement("p");
    var para2 = document.createElement("p");
    var img = document.createElement("img");
    var remove = document.createElement("i");
    remove.className = "fas fa-times";
    remove.setAttribute("onclick", "remove(this)");
    var para1Icon = document.createElement("i");
    para1Icon.classList.add("fal", "fa-edit")  
    para1Icon.setAttribute("onclick", "edit(this)");
    var para2Icon = document.createElement("i");
    para2Icon.classList.add("fal","fa-edit");
    para2Icon.setAttribute("onclick", "edit(this)");
    para1Icon.style.color = "purple"
    para1Icon.style.marginLeft = "10px";
    para2Icon.style.color = "purple"
    para2Icon.style.marginLeft = "10px";
    var product = document.createTextNode("Product: ")
    var productName = document.createTextNode(input1.value);
    para1.appendChild(product)
    para1.appendChild(productName);
    var desc = document.createTextNode("Description: ")
    var productDesc = document.createTextNode(input2.value);
    para2.appendChild(desc);
    para2.appendChild(productDesc);
   
   
    para1.appendChild(para1Icon);
 
    para2.appendChild(para2Icon);
    div.appendChild(remove);
    remove.style.position = "relative";
    remove.style.left = "98%";
    

   
    div.style.border = "3px solid whitesmoke";
    div.style.marginTop = "20px"
    div.style.marginLeft = "25px" ;
    div.style.marginRight = "25px";
    div.style.padding = "3px 10px";
    para1.style.textAlign = "center";
    para2.style.textAlign = "center";
    if (input1.value.toLowerCase() == "car") {
       
        img.src = "Images/car.jpg";
        div.appendChild(img);
        div.classList.add("col-lg-3", "col-md-6", "col-sm-12");
        img.style.width = "100%";
        img.style.height = "200px";

    } else if (input1.value.toLowerCase() == "bike") {
        img.src = "Images/bike.jpg";
        div.appendChild(img);
        div.classList.add("col-lg-3" ,"col-md-6", "col-sm-12");
        img.style.width = "100%";
        img.style.height = "200px";
    }
    else if (input1.value.toLowerCase() == "coat") {
        img.src = "Images/coat.jpg";
        div.appendChild(img);
        div.classList.add("col-lg-3" ,"col-md-6", "col-sm-12");
        img.style.width = "100%";
        img.style.height = "200px";
    }
    else if (input1.value.toLowerCase() == "perfume") {
        img.src = "Images/perfume.jpg";
        div.appendChild(img);
        div.classList.add("col-lg-3" ,"col-md-6", "col-sm-12");
        img.style.width = "100%";
        img.style.height = "200px";
    }
    else if (input1.value.toLowerCase() == "shoes") {
        img.src = "Images/shoes.jpg";
        div.appendChild(img);
        div.classList.add("col-lg-3" ,"col-md-6", "col-sm-12");
        img.style.width = "100%";
        img.style.height = "200px";
    }
    else if (input1.value.toLowerCase() == "watch") {
        img.src = "Images/watch.jpg";
        div.appendChild(img);
        div.classList.add("col-lg-3" ,"col-md-6", "col-sm-12");
        img.style.width = "100%";
        img.style.height = "200px";
    }
    
    div.appendChild(para1);
    div.appendChild(para2);
    products.appendChild(div);
    
    
    input1.value = "";
    input2.value = "";
} else {
    alert("Write correct product name like car,bike,watch,shoes,perfume,coat")
}
    
   
    
   
}
function deleteAll(){
    products.innerHTML = "";
}
function edit(e){
    var edit = prompt("Edit product name", e.parentNode.firstChild.nextSibling.nodeValue);
    e.parentNode.firstChild.nextSibling.nodeValue = edit;
}

function remove(e){
    e.parentNode.classList.add("display");
}

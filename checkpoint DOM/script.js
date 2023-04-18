//btn like
let hearts=document.getElementsByClassName("like");
for(let i=0; i< hearts.length; i++){
    let oneheart=hearts[i];
    oneheart.addEventListener("click", function() {
        if(oneheart.firstChild.style.color =="black"){
    oneheart.firstChild.style.color ="red";
}
    else{
        oneheart.firstChild.style.color="black"
    }
    });
}


//btn plus
let btnplus=document.getElementsByClassName("plus-btn");
for(let i=0; i< btnplus.length; i++){
    let plus=btnplus[i];
    plus.addEventListener("click", function(){
        plus.previousElementSibling.value++;
        total();
        total1();
        total2();
        total3();
    });
}


//btn minus
let btnminus=document.getElementsByClassName ("minus-btn");
for (let i=0; i< btnminus.length; i++){
    let minus=btnminus[i];
    minus.addEventListener("click", function() {
        if(minus.nextElementSibling.value>1){
        minus.nextElementSibling.value--;
        }
        total();
        total1();
        total2();
        total3();
    });
}


//btn remove 
let deletes=document.getElementsByClassName("delete");
for(let i=0; i< deletes.length; i++){
    let del=deletes[i];
    del.addEventListener("click", function(){
        del.parentElement.remove();
        total();
        total1();
        total2();
        total3();
    });
}


//total
let items=document.getElementsByClassName("Item");
let finalPrice= document.getElementById("finalPrice")
function total(){
    let s=0;
    for(let i=0; i<items.length; i++){
        let item = items[i];
        s = 
        s + 
        item.querySelector(".Quant").value * 
        item.querySelector(".price").innerText;
    }
    return (finalPrice.value = s);
}

function total1(){
    let q1= document.getElementById("q1");
    let p1= document.getElementById("p1");
    p1.innerText= q1.value * 1379;
}
function total2(){
    let q2= document.getElementById("q2");
    let p2= document.getElementById("p2");
    p2.innerText= q2.value * 176;
}
function total3(){
    let q3= document.getElementById("q3");
    let p3= document.getElementById("p3");
    p3.innerText= q3.value * 249;
}

//----setting up the images and content for product
var thumb=document.querySelector("#thumbs");
s=localStorage.id;
str="images/"+s+".jpg";
thumb.innerHTML=`
            <img class="Mimg" src=${str} alt="Product image">
            `
var price=document.querySelector("#cost");
p=parseInt(localStorage.price);
op=p+p/5;
price.innerHTML=`<p>${p}.00</p>
                    <p>${op}</p>`

var nam=document.querySelector("#name");
nam.innerText=localStorage.name;

//--------increasing Quantity-----------
var plus=document.querySelector("#plus");
var minus=document.querySelector("#minus");
var quan=document.querySelector("#selected");
var q=1;
plus.addEventListener("click",function(){
    quan.innerText=++q;
})
minus.addEventListener("click",function(){
    if(q!=0){
        quan.innerText=--q;
    }
})

var btn=document.querySelector("#atc");
btn.addEventListener("click",function(){
    lc=localStorage.cart;
    if(lc===undefined){
        var s="";
        s+=localStorage.id+":"+localStorage.name+":"+localStorage.price+":"+q+":"+0+",";
    }
    else{
        s=lc;
        i=lc.slice(0,lc.length-1).split(",");
        s+=localStorage.id+":"+localStorage.name+":"+localStorage.price+":"+q+":"+i.length+",";
    }
    localStorage.setItem("cart",s);
    notifing();
})
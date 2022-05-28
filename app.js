na=[
    {
        id:"200",
        span:50,
        p:"Idly"
    },
    {
        id:"210",
        span:60,
        p:"Dosa"
    },
    {
        id:"300",
        span:150,
        p:"Meals"
    },
    {
        id:"20",
        span:80,
        p:"Manchuria"
    },  
]
popular=[
    {
        id:"20",
        span:80,
        p:"Manchuria"
    },
    {
        id:"210",
        span:60,
        p:"Dosa"
    },
    {
        id:"300",
        span:150,
        p:"Meals"
    },
    {
        id:"10",
        span:200,
        p:"Spring Rolls"
    }
]

var newa=document.querySelector("#MostOrdered");
s="";var al='0';
na.forEach(li=>{
    sr="images/"+li.id+".jpg"
    pr=li.span;
    s+=`<div class="container">
            <a href="product.html"><img class="product" id=${li.id} src=${sr} alt="image"></a>
            <div>
                <p class="food">${li.p}</p>
                <p>price: <strike>${pr+pr/5}</strike> <span>${pr}</span></p>
            </div>
            
        </div>
        `
})

newa.innerHTML=`<legend>Most Ordered</legend>
                ${s}`;
var pl=document.querySelector("#Treanding");
s="";
popular.forEach(li=>{
    sr="images/"+li.id+".jpg";
    pr=li.span;
    s+=`<div class="container">
            <a href="product.html"><img class="product" id=${li.id} src=${sr} alt="image"></a>
            <div>
                <p class="food">${li.p}</p>
                <p>price: <strike>${pr+pr/5}</strike> <span>${pr}</span></p>
            </div>
        </div>
        `
})
pl.innerHTML=`<legend>Treanding</legend>
                ${s}`;

var img=document.querySelectorAll(".product")
img.forEach(im=>{
    im.addEventListener("click",function(){
        localStorage.id=im.id;
        localStorage.price=im.parentElement.nextElementSibling.children[1].children[1].innerHTML;
        localStorage.name=im.parentElement.nextElementSibling.children[0].innerHTML;
    })
})


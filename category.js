b=[
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
        id:"220",
        span:40,
        p:"Upma"
      },
    {
        id:"230",
        span:50,
        p:"Vada"
    },
    {
        id:"240",
        span:80,
        p:"Special Idly"
    },
    {
        id: "250",
        span: 70,
        p: "Pesara Dosa"
    }
]
s=[
    {
        id:"10",
        span:200,
        p:"Spring Rolls"
    },
    {
        id:"20",
        span:80,
        p:"Manchuria"
    },
    {
        id:"30",
        span:150,
        p:"Cutlet Balls"
    },
    {
        id:"40",
        span:200,
        p:"Cutlet"
    },
    {
        id:"50",
        span:"50",
        p:"Samosa"
    }
   
]
m=[
    {
        id:"300",
        span:150,
        p:"Meals"
    },
    {
        id:"310",
        span:200,
        p:"Special Meals"
    },
    {
        id:"320",
        span:230,
        p:"Fried Rice"
    },
    {
        id:"330",
        span:230,
        p:"Veg Fried Rice"
    },
    {
        id:"340",
        span:250,
        p:"Veg Biryani"
    }
]
c=[
    {
        id:"400",
        span:55,
        p:"Potato Curry"
    },
    {
        id:"410",
        span:60,
        p:"Green Curry"
    },
    {
        id:"420",
        span:50,
        p:"Vegetable Mix"
    },
    {
        id:"430",
        span:35,
        p:"coconut"
    },
    {
        id:"440",
        span:35,
        p:"sambar"
    }
]
// Add curry array objects c start id from 400
var cls=localStorage.class;
if(cls=="starters"){
    a=s;
}
else if(cls=="breakfast"){
    a=b;
}
else if(cls=="curry"){
    a=c;
}
else{
    a=m;
}
var main=document.querySelector("main");
s=""
a.forEach(li=>{
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
main.innerHTML=s;
var foods=document.querySelectorAll(".product");
foods.forEach(food=>{
    food.addEventListener("click",function(){
        localStorage.id=food.id;
        x=parseInt(food.id)
        if(cls=="starters"){
           x=x/10-1;
        }
        else if(cls=="breakfast"){
           x=x/10-20;
        }
        else if(cls=="curry"){
            x=x/10-40;
        }
        else{
           x=x/10-30;
        }
        localStorage.price=a[x].span;
        localStorage.name=a[x].p;
    })
})
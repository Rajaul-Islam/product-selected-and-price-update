const img=document.getElementById('art');
const price=document.getElementById('price');
const description=document.getElementById('desc');
const shippintCost =document.getElementById('shipping-cost');
const totalCost = document.getElementById('total-cost');
const free = document.getElementById('free');
const express = document.getElementById('express');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');



function totalPrice(){
const total = Number(shippintCost.innerText)+Number(price.innerText);
totalCost.innerText=total;
}

function isContain(element){
    return element.classList.contains('selected');  
 }
document.getElementById('first').addEventListener('click',function(){
    if(!isContain(first)){
        first.classList.add('selected')
        second.classList.remove('selected')
        third.classList.remove('selected')
    }
    img.src="images/1.jpg"
    description.innerText="First Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos aut accusamus, ipsam iusto illum error nisi! Deseruntfacilis ratione nobis!"
    price.innerText='750';
    totalPrice();
})
document.getElementById('second').addEventListener('click',function(){
    if(!isContain(second)){
        second.classList.add('selected')
        first.classList.remove('selected')
        third.classList.remove('selected')
    }
    img.src="images/2.jpg"
    description.innerText="Second Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos aut accusamus, ipsam iusto illum error nisi! Deseruntfacilis ratione nobis!"
    price.innerText='630';
    totalPrice();

})
document.getElementById('third').addEventListener('click',function(){
    if(!isContain(third)){
        third.classList.add('selected')
        second.classList.remove('selected')
        first.classList.remove('selected')
    }
    img.src="images/3.jpg"
    description.innerText="Third Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos aut accusamus, ipsam iusto illum error nisi! Deseruntfacilis ratione nobis!"
    price.innerText='330';
    totalPrice();
})
document.getElementById('free').addEventListener('click',function(){

    
    
    

    
    if(!isContain(free)){
       free.classList.add('selected');
       express.classList.remove('selected');
    }
    
    document.getElementById('shipping-cost').innerText='5';
    totalPrice();
})
document.getElementById('express').addEventListener('click',function(){

    if(!isContain(express)){
        free.classList.remove('selected');
        express.classList.add('selected');
     }
    
    document.getElementById('shipping-cost').innerText='30';
    totalPrice();
})
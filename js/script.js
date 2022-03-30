"use strict"

const select=document.querySelector(".form-select");
const button=document.querySelector(".button");

select.addEventListener('change',function(){
console.log(this.value);
});
button.addEventListener('click',function(){
    console.log(this.value);
    });
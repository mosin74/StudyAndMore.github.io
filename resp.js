
let Burger=document.querySelector('.burger')
let Navigation=document.querySelector('.navigation')
let Navlist=document.querySelector('.nav-list')
Burger.addEventListener('click',()=>{
Navigation.classList.toggle("h-nav-res")
Navlist.classList.toggle("v-hide-res")

});

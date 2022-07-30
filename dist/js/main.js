const btn = document.querySelector('.menu-btn');
console.log(btn);
const humburger = document.querySelector(".menu-btn_burger");
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.menu-nav_item');
console.log(navItem);
console.log(humburger);
let showMenu = false;

btn.addEventListener('click', toggleBtn);
function toggleBtn(){
    if(!showMenu){
       humburger.classList.add('open');
       nav.classList.add('open');
       menuNav.classList.add('open')
       navItem.forEach(function(e){
           e.classList.add('open')
       })
       showMenu = true
    }else{
        humburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItem.forEach(function(e){
            e.classList.remove('open')
        })
        showMenu = false
    }
}

// setTimeout(function(){
//     window.open("https://fashionesttadesign.netlify.app/", "_blank", "width=400, height=400, left=200, top=200");
// }, 2000)

const btne = document.querySelector('button');

window.onscroll = function(){
    if(window.scrollY >= 600){
      btne.style.display = "block"
    }else{
        btne.style.display = "none" 
    }
}
btne.onclick = function(){
    window.scrollTo({
        top: 0,
     
        behavior: "smooth"
    })
}

window.localStorage.setItem("color", "#fff")
window.localStorage.fontSize = "20px"
window.localStorage["fontWeight"] = "bold"
console.log(window.localStorage)

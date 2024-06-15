let menu=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menu.onclick=()=>{
    menu.classList.toggle('bx bx');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

window.sr=new ScrollReveal();


sr.reveal('.text',{delay: 200, origin:'top'})
sr.reveal('.form-container form',{delay: 800, origin:'left'})
sr.reveal('.heading',{delay: 800, origin:'top'})
sr.reveal('.ride-container .box',{delay: 800, origin:'top'})
sr.reveal('.services-container .box',{delay: 800, origin:'top'})
sr.reveal('.about-container .box',{delay: 800, origin:'top'})
sr.reveal('.reviews-container',{delay: 800, origin:'top'})
sr.reveal('.newsletter .box',{delay: 400, origin:'bottom'})
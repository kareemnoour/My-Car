let nav = document.getElementById("nav");
let btn = document.getElementById("button");

if (window.matchMedia("(min-width: 992px)").matches) {
    window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { 
            nav.style.width = "100%";
            nav.style.backgroundColor = "rgb(33 37 41 / 41%)";
            nav.style.justifyContent = "flex-start";
        } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
            nav.style.width = "50%";
            nav.style.backgroundColor = "#9e9e9e2e";
            nav.style.justifyContent = "center";
        }
    }
};

btn.style.display = "none";
btn.style.padding = "10px 20px";

window.addEventListener("scroll",function () {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btn.style.display = "block";
        } else {
            btn.style.display = "none";
            }
});

btn.addEventListener("click", function () {
    document.body.scrollTop = 0;  
    document.documentElement.scrollTop = 0;
});

ScrollReveal({ reset: true , distance: '60px'});
ScrollReveal().reveal('.main-title', { delay: 500, origin: 'top', mobile: false});
ScrollReveal().reveal(".content ,.img2" , { delay: 600, origin: 'left', mobile: false});
ScrollReveal().reveal(".img1 ,.icons" , { delay: 700, origin: 'right', mobile: false });
ScrollReveal().reveal(".cont,form" , { delay: 800, origin: 'bottom', mobile: false });


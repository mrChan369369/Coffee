let bar = document.querySelector("#bar");
let navLink =document.querySelector(".nav-links");
let bannerCard =document.querySelector(".banner-card");


bar.addEventListener("click",function(){
    // console.log("hi");
    navLink.classList.toggle("show");
    bar.classList.toggle("fa-times");
    // bannerCard.style.display ="none"   //first way...
    bannerCard.classList.toggle("hide");  //Sec logic...

});


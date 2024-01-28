let bar = document.querySelector("#bar");
let navLink =document.querySelector(".nav-links");

bar.addEventListener("click",function(){
    // console.log("hi");
    navLink.classList.toggle("show");
    bar.classList.toggle("fa-times");
});


window.addEventListener("load", function(){
  var menuButton = document.querySelector(".menu");

  var navMenu = document.querySelector("nav ul");

  menuButton.addEventListener("click", function(){
    navMenu.classList.toggle("open");
  })
})

$(document).ready(function(){
    $(".hamburger").on("click", function(){
        $("nav").toggleClass("open");
     });
});


function myFunction(x) {
    x.classList.toggle("change");
  }
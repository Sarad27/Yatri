$(document).ready(function() {

  $("#example-search-input").css("background-color", "#e8ecd6");

  $('.form-control').keydown(function(event) {
    if (event.keyCode == 13) {
      this.form.submit();
      return false;
    }
  });
});



$(".effect-on").hover(function(){
  $(".info-guide").fadeIn();
});

$(".effect-on").mouseleave(function(){
  $(".info-guide").fadeOut();
});

$('.carousel.carousel-slider').carousel({fullWidth: true}).style.height = window.innerHeight + "px";




$(window).scroll(function() {
  if ($(this).scrollTop() > 600) {
    $(".scrollup").fadeIn();
  } else {
    $(".scrollup").fadeOut();
  }
})

$(".scrollup").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 600);
  return false;
})


$(document).ready(function(){
  $('.your-class').slick({
    arrows:false,
    autoplay: true,
    autoplaySpeed:2000,
  
    
  });
});

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});



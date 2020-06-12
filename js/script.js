$(document).ready(function () {
   $(".slider__row").slick({
     slidesToShow: 4,
     slidesToScroll: 4,
     arrows:false,
     dots:true,
     adeptiveHeight:true,
     variableWidth: false,
     
   });

   $(".testimonials__row").slick({
    slidesToShow: 1,
    slidesToScroll: 4,
    arrows:false,
    dots:true,
    adeptiveHeight:true,
    variableWidth: false, 
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
  });

  let filter = $("[data-filter");
  filter.on("click", function(event) {
    event.preventDefault();

    let cat = $(this).data('filter');

    if(cat=='all') {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function() {

        let workCat = $(this).data('cat');
        
        if(workCat != cat) {
          $(this).addClass('hide');
        } else {
          $(this).removeClass('hide');
        }
        
  
      });

    }

   
  });

  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })

 
 });
 
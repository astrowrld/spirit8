$(document).ready(function () {
   $(".slider__row").slick({
     slidesToShow: 4,
     slidesToScroll: 4,
     arrows:false,
     dots:true,
     adeptiveHeight:true,
     variableWidth: false,
     responsive:[
      {
        breakpoint:736,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 2,
        }
    },
    {
      breakpoint:380,
      settings:{
        slidesToShow: 1,
        slidesToScroll: 1,
        adeptiveHeight: false,
        variableWidth: true,
        centerMode: true,
 
      }
  }
    
  
  ]
     
     
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


  //Фильтр портфолио
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


  //Скролл страницы
	$("a.menu-header__link, a.more").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
 
 });
 
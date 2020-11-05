jQuery(document).ready(function () {

  let burger = $(".header__burger");
  let burgerButton = $(".header__button");
  let burgerMenu = $(".menu");
  // let bodyBlock = $("body");
  let btns = $(".works__btn");
  let headerOverlay = $(".header__overlay");
  let headerNav = $(".header__navigation");

  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  // burger.on("click", function() {
  //     burgerMenu.toggleClass("active");
  //     burgerButton.toggleClass("active");
  //     // bodyBlock.toggleClass("body-lock");
  //     headerOverlay.toggleClass("active");
  //     headerNav.toggleClass("active");
  // })

  let all = $(".header__overlay, .header__navigation, .header__button, .menu");

  burger.on("click", function() {
    all.toggleClass("active");
  })

  $('.about__slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 300,
      responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  });

  btns.on("click", function () {
    $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    let cards = $(".works__card");
    cards.removeClass("active");
    let btnText = $(this)
        .text()
        .toLowerCase();
    let final = cards.filter(function () {
        if (btnText === "all") {
            return cards;
        } else {
            return $(this).data("category") === btnText;
        }
    });
    final.each(function () {
        $(this).addClass("active");
    });
  });

  $('.partners__slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    speed: 300
  });

  //-------------footer-date------------------------
  let date = new Date().getFullYear();
  $("#date").text(new Date().getFullYear());

  $("#ancor").on("click","a", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

$(window).scroll(function() {
  let height = $(window).scrollTop();
   /*Если сделали скролл на 600px задаём новый класс для span*/
  if(height > 600){
  $('#span').addClass('active');
  } else{
  /*Если меньше 600px удаляем класс для span*/
  $('#span').removeClass('active');
  }

  if(height > 100){
  /*Если сделали скролл на 100px задаём новый класс для ancor*/
  $('#ancor').addClass('active');
  } else{
  /*Если меньше 100px удаляем класс для ancor*/
  $('#ancor').removeClass('active');
  }

});


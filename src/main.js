jQuery(document).ready(function () {

    let burger = $(".header__burger");
    let burgerButton = $(".header__button");
    let burgerMenu = $(".menu");
    let bodyBlock = $("body");

    burger.on("click", function() {
        burgerMenu.toggleClass("active");
        burgerButton.toggleClass("active");
        bodyBlock.toggleClass("body-lock");
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

    let btns = $(".works__btn");

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
      speed: 300
    });
});
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
});
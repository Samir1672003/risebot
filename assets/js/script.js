$(document).ready(function () {
    $('.row2').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            variableWidth: true,
            centerPadding: "20%",
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            centerMode: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: true,
            infinite: false,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: false,
            infinite: false,
            centerPadding: "25%",
          },
        },
      ],
    });
  
    $('.row7').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      dots: false,
      slidesToScroll: 1,
      rows: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            centerMode: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            adaptiveHeight: true,
            infinite: false,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            adaptiveHeight: false,
            infinite: false,
          },
        },
      ],
    });
  
    $('.row3').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      rows: 2,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "0%",
          },
        },
        {
          breakpoint: 480,
          settings: {
            dots: false,
            infinite: true,
            speed: 300,
            adaptiveHeight: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
          },
        },
      ],
    });
  
    $('.image-conatiner6').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      rows: 2,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  
    $('.row8').slick({
      slidesToShow: 2,
      slideToScroll: 1,
      dots: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slideToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
  
    $('.plus').click(function () {
      $(this).toggleClass("active");
      $(this).toggleClass('.plus-linetwo');
    });
  
    $('.mobile-button').click(function () {
      $(this).toggleClass('active');
      $('.line-two').toggle();
      $('.nav-center').slideToggle(400);
    });
  
    $('button.toggle').click(function () {
      $('p.toggle-content').not($(this).next()).slideUp();
      $(this).next('p.toggle-content').slideToggle();
    });
  });


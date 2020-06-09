$(document).ready(function () {
  $('.question').click(function () {
    $(this).toggleClass('question--active', 'slow');
    $(this).find('.question-text__arrow').toggleClass('question-text__arrow--rotate', 1000, "easeOutSine");
    $(this).find('.question-text__desc').slideToggle('slow');
  });

  // Смена цвета пункта меню
  $('.menu-list__link').click(function () {
    $('.menu-list__link').removeClass('menu-list__link--active');
    $(this).addClass('menu-list__link--active');
  });

  // Скролл контента
  $('.home').click(function () {
    let scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    }
    return false;
  });
  $('.answ').click(function () {
    let scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    }
    return false;
  });
  $('.rev').click(function () {
    let scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    }
    return false;
  });
  $('.news').click(function () {
    let scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    }
    return false;
  });

  // Бургер меню
  $('.menu-burger').click(function () {
    $(this).toggleClass('menu-burger--active');
    $('.menu-mobile').slideToggle();
  });

  $('.menu-mobile__link').click(function () {
    $('.menu-mobile__item').removeClass('menu-mobile__item--active')
    $(this).parent('.menu-mobile__item').addClass('menu-mobile__item--active')
    $('.menu-burger').toggleClass('menu-burger--active');
    $('.menu-mobile').hide();
  });

  // Слайдер

  $('.slider-container').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });
});
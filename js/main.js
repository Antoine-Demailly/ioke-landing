'use strict';

$(function() {
  var $window = $(window);
  var header = $('#header');
  var background = $('#background');
  var landing = $('#landing');
  var body = $('body');

  onScrollCallback();
  $window.scroll(onScrollCallback);

  function onScrollCallback() {
    var scroll = $window.scrollTop();
    // console.log($window.scrollTop(), header.innerHeight(), background.height());

    if (scroll >= background.innerHeight() - header.innerHeight()) {
      body.addClass('fixed');
    } else {
      body.removeClass('fixed');
    }

    if (scroll <= landing.innerHeight()) {
      var opacity = 1 - (scroll * 1.1 / landing.innerHeight());
      landing.css('opacity', opacity);
    }
  }
});

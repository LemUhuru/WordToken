/*$('html, body').scrollTop(10000);*/

$(window).scroll(function() {
  checkToTop();
});

var to_top = $('.to_top');
var timer;

to_top.find(".box").click(function(){
  $('body, html').animate({ scrollTop: "0px" });
});

function checkToTop() {
  var view = isElementInViewport(to_top);
  if (view) {
    timer = setTimeout(function(){
      to_top.css("transition","opacity 1s");
      to_top.css('opacity', 1);
    },300);
  } else {
    clearTimeout(timer);
    to_top.css("transition","opacity 0s");
    to_top.css('opacity', 0);
  }
}


function isElementInViewport(el) {

  //special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}

//token_box 
var token_box = $('.token_box');
$('.give_token').click(function(){
  token_box.fadeIn();
  var n = token_box.find('.dialog').offset().top;
  $('html, body').animate({ scrollTop: (n - 100)+"px" });
});
token_box.click(function(e) {
  if(e.target != this) return;
  if($(this).is('.token_box')) {
    $(this).hide();
  }
});



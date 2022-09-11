//scroll animation
window.onscroll = function(){scrollFunction()};
    function scrollFunction() {
        if(document.body.scrollTop > 290 ||
            document.documentElement.scrollTop > 290){
                document.getElementById('blur').style.top = '0';
                document.getElementById('btn-top').style.bottom = '25px';
            } else {
                document.getElementById('blur').style.top = '-100px';
                document.getElementById('btn-top').style.bottom = '-40px';
            }
    }

$(function(){
  //a tag 막기
  $('a[href="#"]').click(function(ignore){
    ignore.preventDefault();
    alert('서브 페이지는 준비 중입니다.');
  });

  //모바일 메뉴
  $('.btn-show-menu').click(function(){
    $(this).toggleClass('btn-hide-menu');
    $('.gnb').fadeToggle();
  });

  var wd = $(window).width();
    if(wd <= 768) {
        $('.gnb li a').click(function(){
            $('.gnb').fadeOut();
            $('.btn-show-menu').removeClass('btn-hide-menu');
        })
    }

  //탑 버튼
  $("#btn-top").click(function() {   
    $('html, body').animate({
      scrollTop : 0
     }, 500);
     return false;
     });

  //더 읽어보기
  $('#btn-read-more').click(function(){
    $(this).fadeOut(800);
    $('#more').fadeIn(800);
  })


  //플러그인
  var swiper = new Swiper(".moreItems", {
  slidesPerView: 2.3,
  spaceBetween: 20,
  // 반응형 분기점
  breakpoints: {
      768: {
          slidesPerView: 2.5,
          spaceBetween: 20
      },
      1280: {
          slidesPerView: 4.5,
          spaceBetween: 20 
      }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

AOS.init({
  easing: 'ease',
  duration: 1000,
  once: true
});
})
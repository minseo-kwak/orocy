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
})
$(document).ready(function(){
  $("#sp_navi_btn").click(function(){
    $(".sp_navi_li").slideToggle();
  });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
    {
            loop: true,
            nav: false,
            navigation : true,
            items: 1,
            autoplay: true
        }  
　);
});

$(window).load(function(){
  $(".products_list img").click(function(){
    var img_src = $(this).attr("src");
    $(".main_pic img").attr("src", img_src);
  });
});
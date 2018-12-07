//カバー画像をオートでスライド

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   600: {
    //     items: 3
    //   },
    //   1000: {
    //     items: 5
    //   }
    // }
  });
});

//ハンバーガーメニューを表示

$(document).ready(function() {
  $("#sp_navi_btn").click(function() {
    $(".sp_menu_toggle").slideToggle();
  });
});

//見たい商品を拡大する

$(window).load(function() {
  $("#list_img img").click(function() {
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});

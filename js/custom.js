$(document).ready(function () {

    $(".pc-close-aside").on("click", function () {
        $("main").toggleClass("main-pc-full-width");
        $("aside").toggleClass("aside-pc-close");
        
      });

  $(".sigma-top-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  });

  $(".sigma-news-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  });

  $(".sigma-blog-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  });
}); /*jQuery*/

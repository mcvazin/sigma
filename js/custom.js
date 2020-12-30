$(document).ready(function () {

  function getTopSliderSettings(){
    return {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 2500,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
          },
        }
      ],
    }
    
  }

  $(".sigma-top-slider").slick(getTopSliderSettings());

  function getSliderSettings(){
    return {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 2500,
          settings: {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    }
  }

  $(".sigma-news-slider").slick(getSliderSettings());
  $(".sigma-blog-slider").slick(getSliderSettings());


  $(".pc-close-aside").on("click", function () {
    $("main").toggleClass("main-pc-full-width");
    $("aside").toggleClass("aside-pc-close");

    $('.sigma-news-slider').slick('unslick'); /* ONLY remove the classes and handlers added on initialize */
    $('.sigma-news-slider .slick-slide').remove(); /* Remove current slides elements, in case that you want to show new slides. */
    $('.sigma-news-slider').slick(getSliderSettings()); /* Initialize the slick again */
    $('.sigma-news-slider').slick('unslick').slick('reinit');
   
    $('.sigma-blog-slider').slick('unslick'); /* ONLY remove the classes and handlers added on initialize */
    $('.sigma-blog-slider .slick-slide').remove(); /* Remove current slides elements, in case that you want to show new slides. */
    $('.sigma-blog-slider').slick(getSliderSettings()); /* Initialize the slick again */
    $('.sigma-blog-slider').slick('unslick').slick('reinit');
   
    $('.sigma-top-slider').slick('unslick'); /* ONLY remove the classes and handlers added on initialize */
    $('.sigma-top-slider .slick-slide').remove(); /* Remove current slides elements, in case that you want to show new slides. */
    $(".sigma-top-slider").slick(getTopSliderSettings());
    $('.sigma-top-slider').slick('unslick').slick('reinit');
    
  });

  function highlightFirst() {
    let flexChildren = document.querySelectorAll(".cat-link");
    let leftPosition = flexChildren[0].offsetTop;
    for (let flexChild of flexChildren) {
      if (flexChild.offsetTop <= leftPosition) {
        flexChild.classList.add("firstRow");
      } else {
        flexChild.classList.remove("firstRow");
      }
    }
  }
  window.addEventListener("resize", highlightFirst);

  $(".sigma-modal").on("shown.bs.modal", function (event) {
    highlightFirst();
    $(event.relatedTarget).addClass("openned-catalog");
  });

  $(".sigma-modal").on("hide.bs.modal", function (event) {
    $(".openned-catalog").removeClass("openned-catalog");
  });

  $("aside").on("click", function () {
    $(".sigma-modal").modal("hide");
    $(".openned-catalog").removeClass("openned-catalog");
  });

  $(document).on("click", function (e) {
    if (e.target.className == "modal-body") {
      $(".sigma-modal").modal("hide");
      $(".openned-catalog").removeClass("openned-catalog");
    }
  });
}); /*jQuery*/

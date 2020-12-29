$(document).ready(function () {
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
    responsive: [
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
  });

  $(".sigma-blog-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
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
  });

  $(".pc-close-aside").on("click", function () {
    $("main").toggleClass("main-pc-full-width");
    $("aside").toggleClass("aside-pc-close");
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

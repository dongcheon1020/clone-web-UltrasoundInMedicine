$(document).ready(function () {
  // menu slide
  function windowWidthRow() {
    $(".menu-list-item")
      .off("click")
      .hover(
        function () {
          $(".menu-list-item").css({
            height: "320px",
          });
        },
        function () {
          $(".menu-list-item").css({
            height: "80px",
          });
        }
      );
    // init
    $(".menu-list-item").css({
      height: "80px",
    });
    $(".list-item-arrow-up").css({
      transform: "rotateX(0deg)",
    });
    $(".menu-content ").css({
      visibility: "visible",
    });
    $(".menu-center").css({
      right: "0",
      opacity: "1",
    });
  }
  function windowWidthCollmn() {
    $(".menu-list-item")
      .off("mouseenter mouseleave")
      .click(function () {
        let submenuHeight = $(this).children(".submenu").height() + 120;
        let listItemHeight = $(this).children("a").height();

        $(this).find(".list-item-arrow-up").css({
          transform: "rotateX(180deg)",
        });
        $(this).siblings().find(".list-item-arrow-up").css({
          transform: "rotateX(0deg)",
        });

        $(this)
          .css({
            height: submenuHeight + "px",
          })
          .siblings(".menu-list-item")
          .css({
            height: listItemHeight + "px",
          });

        if ($(this).height() > listItemHeight) {
          $(this).css({
            height: listItemHeight + "px",
          });
          $(this).find(".list-item-arrow-up").css({
            transform: "rotateX(0deg)",
          });
        }
      });
    // init
    $(".menu-content ").css({
      visibility: "hidden",
    });
    $(".menu-center").css({
      opacity: 0,
      right: "-100vw",
    });
  }
  let windowWidthObserver = $(window).width();
  windowWidthObserver < 920 ? windowWidthCollmn() : windowWidthRow();
  $(window).resize(function () {
    windowWidthObserver = $(window).width();
    windowWidthObserver < 920 ? windowWidthCollmn() : windowWidthRow();
  });

  // menu-tg-bt
  $(".menu-tg-bt").click(function () {
    $(".menu-content ").css({
      visibility: "visible",
    });
    $(".menu-center").css({
      right: "0",
      opacity: 1,
    });
  });
  $(".close").click(function () {
    $(".menu-content ").css({
      visibility: "hidden",
    });
    $(".menu-center").css({
      right: "-100vw",
      opacity: 0,
    });
  });

  // banner-slide
  let bannerSlideWidth = $(".banner-slide").width();
  function bannerSlide(width, index) {
    let slideNum = width * index;
    return slideNum;
  }
  $(".banner-slide-dot-item").click(function () {
    let bannerDot = $(this).index();
    let slideNumber = bannerSlide(bannerSlideWidth, bannerDot);
    $(this).addClass("active").siblings().removeClass("active");
    $(".banner-slider").css({
      transform: "translateX(" + -slideNumber + "px)",
    });
  });
  // moreSlide
  let moreSlideNum = 0;
  let moreSdlieWidth = $(".more-slide").width();
  function moreSlide(width, slideNum) {
    let moreSlideNum = width * slideNum * -1;
    return moreSlideNum;
  }
  // click

  $(".arrowbt-left").click(function () {
    moreSlideNum -= 1;
  });
  $(".arrowbt-right").click(function () {
    moreSlideNum += 1;
  });
  $(".arrowbt").click(function () {
    if (moreSlideNum >= 3) {
      moreSlideNum = 0;
    } else if (moreSlideNum < 0) {
      moreSlideNum = 2;
    }
    let moreSlideNumber = moreSlide(moreSlideNum, moreSdlieWidth);
    $(".more-slider").css({
      transform: "translateX(" + moreSlideNumber + "px)",
    });
  });
  // auto
  setInterval(function () {
    moreSlideNum += 1;

    if (moreSlideNum >= 3) {
      moreSlideNum = 0;
    } else if (moreSlideNum < 0) {
      moreSlideNum = 2;
    }
    let moreSlideNumber = moreSlide(moreSlideNum, moreSdlieWidth);
    $(".more-slider").css({
      transform: "translateX(" + moreSlideNumber + "px)",
    });
  }, 3000);
  // resize windth init
  $(window).resize(function () {
    moreSdlieWidth = $(".more-slide").width();
    zoneWidth = $(".zone-slide-item").width() + 20;
    // bannerslide

    $(".banner-slider").css({
      transform: "translateX(0px)",
    });
    $(".banner-slide-dot-item:nth-child(1)")
      .addClass("active")
      .siblings()
      .removeClass("active");
    // moresldie
    $(".more-slider").css({
      transform: "translateX(0px)",
    });
    moreSlideNum = 0;
  });

  // zoneSlide
  let zoneSlideNum = 0;
  let zoneWidth = $(".zone-slide-item").width() + 20;
  function zoneSlide(width, index) {
    let zoneNum = width * index;
    return zoneNum;
  }
  // click
  $(".zone-bt-left").click(function () {
    zoneSlideNum -= 1;
  });
  $(".zone-bt-right").click(function () {
    zoneSlideNum += 1;
  });
  $(".zone-bt").click(function () {
    if (zoneSlideNum >= 3) {
      zoneSlideNum = 0;
    } else if (zoneSlideNum < 0) {
      zoneSlideNum = 2;
    }
    let zoneslide = zoneSlide(zoneWidth, zoneSlideNum);
    $(".zone-slider").css({
      transform: "translateX(" + -zoneslide + "px)",
    });
  });
  // auto

  setInterval(function () {
    zoneSlideNum += 1;
    if (zoneSlideNum >= 2) {
      zoneSlideNum = 0;
    } else if (zoneSlideNum < 0) {
      zoneSlideNum = 2;
    }
    let zoneslide = zoneSlide(zoneWidth, zoneSlideNum);
    $(".zone-slider").css({
      transform: "translateX(" + -zoneslide + "px)",
    });
  }, 3000);
});

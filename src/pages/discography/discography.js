import setTitle from "../../lib/setTitle.js";

setTitle("Discography");

let showNav = false;
$(".navbar-btn").click(function () {
  $(".navbar").toggleClass("open", !showNav);
  $(".navbar").toggleClass("close", showNav);
  showNav = !showNav;
});
$(".on").click(function () {
  $(".off").css("display", "block");
  $(".on").css("display", "none");
  $(".text").css("display", "none");
  console.log("on");
});
$(".off").click(function () {
  $(".on").css("display", "block");
  $(".off").css("display", "none");
  $(".text").css("display", "block");
  console.log("off");
});

$(".album img").click(function (e) {
  console.log(11);
  $(".x").css("display", "block");
  $(".text").css("display", "block");
});

$(".x").click(function () {
  console.log("click x");
  $(".x").css("display", "none");
  $(".text").css("display", "none");
});

function bg() {
  if (pageCnt == 0) {
    $(".discography-bg").css(
      "background-image",
      "url(https://song0331.github.io/newjeansImg/discography/0.jpg)"
    );
    $(".left").css("color", "cornflowerblue");
    $(".right").css("color", "cornflowerblue");
    $(".album1").css("transform", "translateX(0px)");
    $(".album2").css("transform", "translateX(3000px)");
    $(".album3").css("transform", "translateX(3000px)");
    $(".album4").css("transform", "translateX(3000px)");
  } else if (pageCnt == 1) {
    $(".discography-bg").css(
      "background-image",
      "url(https://song0331.github.io/newjeansImg/discography/1.jpg)"
    );
    $(".left").css("color", "#cd4d62");
    $(".right").css("color", "#cd4d62");
    $(".album1").css("transform", "translateX(3000px)");
    $(".album2").css("transform", "translateX(0px)");
    $(".album3").css("transform", "translateX(3000px)");
    $(".album4").css("transform", "translateX(3000px)");
  } else if (pageCnt == 2) {
    $(".discography-bg").css(
      "background-image",
      "url(https://song0331.github.io/newjeansImg/discography/2.jpg)"
    );
    $(".left").css("color", "#505050");
    $(".right").css("color", "#505050");
    $(".album1").css("transform", "translateX(3000px)");
    $(".album2").css("transform", "translateX(3000px)");
    $(".album3").css("transform", "translateX(0px)");
    $(".album4").css("transform", "translateX(3000px)");
  } else if (pageCnt == 3) {
    $(".discography-bg").css(
      "background-image",
      "url(https://song0331.github.io/newjeansImg/discography/3.jpg)"
    );
    $(".left").css("color", "#c6596b");
    $(".right").css("color", "#c6596b");
    $(".album1").css("transform", "translateX(3000px)");
    $(".album2").css("transform", "translateX(3000px)");
    $(".album3").css("transform", "translateX(3000px)");
    $(".album4").css("transform", "translateX(0px)");
  }
}

let pageCnt = 0;
$(".right").click(function () {
  if (pageCnt < 3) {
    pageCnt++;
    bg();
  }
});

$(".left").click(function () {
  if (pageCnt > 0) {
    pageCnt--;
    bg();
  }
});

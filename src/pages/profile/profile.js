import setTitle from "../../lib/setTitle.js";

setTitle("Profile");

let cnt = 0;
$(".navbar-btn").click(function () {
  cnt++;
  if (cnt % 2 != 0) {
    $(".navbar").addClass("open");
    $(".navbar").removeClass("close");
  } else {
    $(".navbar").addClass("close");
    $(".navbar").removeClass("open");
  }
});

$(".info").click(function (e) {
  $(e.target.nextElementSibling).toggleClass("text-opacity");
});

let cnt2 = 0;
$(".btn").click(function () {
  if (cnt2 % 2 == 0) {
    $(".on").css("display", "block");
    $(".off").css("display", "none");
    $(".minji").css(
      "background-image",
      "url(https://song0331.github.io/newjeansImg/profile/after/0.jpg)"
    );
    $(".hanni").css(
      "background-image",
      "url(https://song0331.github.io/newjeansImg/profile/after/1.jpg)"
    );
    $(".danielle").css(
      "background-image",
      "url(https://song0331.github.io/newjeansImg/profile/after/2.jpg)"
    );
    $(".haerin").css(
      "background-image",
      "url(https://song0331.github.io/newjeansImg/profile/after/3.jpg)"
    );
    $(".hyein").css(
      "background-image",
      "url(https://song0331.github.io/newjeansImg/profile/after/4.jpg)"
    );
  } else {
    $(".on").css("display", "none");
    $(".off").css("display", "block");
    $(".minji").css(
      "background-image",
      "url(https://song0331.github.io/newjeansImg/profile/before/0.jpg)"
    );
    $(".hanni").css(
      "background-image",
      "url(https://song0331.github.io/newjeansImg/profile/before/1.jpg)"
    );
    $(".danielle").css(
      "background-image",
      "url(https://song0331.github.io/newjeansImg/profile/before/2.jpg)"
    );
    $(".haerin").css(
      "background-image",
      "url(https://song0331.github.io/newjeansImg/profile/before/3.jpg)"
    );
    $(".hyein").css(
      "background-image",
      "url(https://song0331.github.io/newjeansImg/profile/before/4.jpg)"
    );
  }
  cnt2++;
});

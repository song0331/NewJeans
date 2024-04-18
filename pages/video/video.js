import setTitle from "../../lib/setTitle.js";

setTitle("Video");

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

$("img").click(function (e) {
  let address = $(e.target).attr("src");
  let arr = [];
  arr = address.split("/");

  $(".now").attr("src", `https://www.youtube-nocookie.com/embed/${arr[4]}`);
});

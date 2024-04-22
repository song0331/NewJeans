import setTitle from "../../lib/setTitle.js";

setTitle("Video");

let showNav = false;
$(".navbar-btn").click(function () {
  $(".navbar").toggleClass("open", !showNav);
  $(".navbar").toggleClass("close", showNav);
  showNav = !showNav;
});
$("button").click(function (e) {
  let address = "";
  let arr = [];

  if (e.target.tagName === "IMG") address = $(e.target).attr("src");
  else address = $(e.target.children[0]).attr("src");

  arr = address.split("/");
  $(".now").attr("src", `https://www.youtube-nocookie.com/embed/${arr[4]}`);
});

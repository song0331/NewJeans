import setTitle from "../../lib/setTitle.js";

setTitle("Profile");

$(".info").click(function (e) {
  $(e.target.nextElementSibling).toggleClass("text-opacity");
});

let changeImg = false;
$(".btn").click(function () {
  const imgURL = "https://song0331.github.io/newjeansImg/profile/";
  const member = ["minji", "hanni", "danielle", "haerin", "hyein"];
  const state = !changeImg ? "after" : "before";

  $(".on").css("display", !changeImg ? "block" : "none");
  $(".off").css("display", changeImg ? "block" : "none");

  member.forEach((item, idx) =>
    $(`.${item}`).css("background-image", `url(${imgURL}${state}/${idx}.jpg)`)
  );

  changeImg = !changeImg;
});

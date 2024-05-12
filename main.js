let showNav = false;
$(".navbar-btn").click(() => {
  $(".navbar").toggleClass("open", !showNav);
  $(".navbar").toggleClass("close", showNav);
  showNav = !showNav;
});

$("a").keypress((e) => {
  e.preventDefault();
  window.location.href = e.target.href;
});

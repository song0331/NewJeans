import setTitle from "../../lib/setTitle.js";
import pb from "../../api/pocketbase.js";

setTitle("Gallery");

let showNav = false;
$(".navbar-btn").click(function () {
  $(".navbar").toggleClass("open", !showNav);
  $(".navbar").toggleClass("close", showNav);
  showNav = !showNav;
});

const galleryData = pb.collection("gallery").getFullList();

galleryData.then((data) => {
  data.forEach((item) => {
    let img = `
    <li class="image-list-item" tabindex="0">
      <img class="box-item" src="${
        import.meta.env.VITE_PB_API
      }/api/files/gallery/${item.id}/${item.image}" alt="${item.year} 뉴진스" />
    </li>
  `;

    $(".image-list").append(img);
  });
});

$(".image-list-item").click((e) => {
  $(".modal")[0].show();
  $(".modal").css("background-image", `url('${e.target.src}')`);
});

$(".image-list-item").keypress((e) => {
  e.preventDefault();
  $(".modal")[0].show();
  $(".modal").css("background-image", `url('${e.target.children[0].src}')`);
});

$(".modal").click(() => $(".modal")[0].close());

$("html").keydown((e) => {
  if (e.keyCode === 27) $(".modal")[0].close();
});

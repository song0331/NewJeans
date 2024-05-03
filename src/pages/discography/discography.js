import setTitle from "../../lib/setTitle.js";
import pb from "../../api/pocketbase.js";

setTitle("Discography");

let showNav = false;
$(".navbar-btn").click(function () {
  $(".navbar").toggleClass("open", !showNav);
  $(".navbar").toggleClass("close", showNav);
  showNav = !showNav;
});

const albumData = await pb.collection("discography").getFullList({
  sort: "release",
});

albumData.forEach((item) => {
  console.log(item.albumTrack);
  let list_item = `
    <li class="album-list-item" tabindex="0">
      <img src="${import.meta.env.VITE_PB_API}/api/files/discography/${
    item.id
  }/${item.albumCover}" alt="${item.albumName} 앨범 커버 사진" title="${
    item.albumName
  }" />
    </li>
  `;

  $(".album-list").append(list_item);
});

$(".album-list").click((e) => {
  if (e.target.tagName !== "IMG") return;
  console.log(e.target.title);

  $(".modal")[0].showModal();
  // $(".modal img").attr("src", e.target.src);
  $(".modal").css("background-image", `url(${e.target.src})`);
  $(".album-title").text(e.target.title);
  $(".album-title").attr("title", e.target.title);
});

$(".album-list").keydown((e) => {
  if (e.key === "Tab") return;

  console.log(e.key === "Enter");
  console.log(e.target);

  if (e.target.tagName === "LI") {
    // $(".modal")[0].showModal();
    document.querySelector(".modal").showModal();
    // $(".modal").attr("src", e.target.children[0].src);
    $(".modal").css("background-image", `url(${e.target.children[1].src})`);
    // console.log("!!!!!!");
  }
});

$(".close_btn").click((e) => {
  $(".modal")[0].close();
});

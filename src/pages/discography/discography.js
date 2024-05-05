import setTitle from "../../lib/setTitle.js";
import pb from "../../api/pocketbase.js";

setTitle("Discography");

let showNav = false;
$(".navbar-btn").click(function () {
  $(".navbar").toggleClass("open", !showNav);
  $(".navbar").toggleClass("close", showNav);
  showNav = !showNav;
});

const albumData = pb.collection("discography").getFullList({
  sort: "release",
});

let albumTrack = [];

albumData
  .then((data) => {
    data.forEach((item, idx) => {
      albumTrack.push(item.albumTrack);
      let list_item = `
    <li class="album-list-item" tabindex="0">
      <img data-index=${idx} src="${
        import.meta.env.VITE_PB_API
      }/api/files/discography/${item.id}/${item.albumCover}" alt="${
        item.albumName
      } 앨범 커버 사진" title="${item.albumName}" />
    </li>
  `;

      $(".album-list").append(list_item);
    });
  })
  .catch((error) => console.log(error));

$(".album-list").click((e) => {
  if (e.target.tagName !== "IMG") return;

  $(".album-trackList").empty();
  $(".modal")[0].showModal();
  $(".modal").css("background-image", `url(${e.target.src})`);
  $(".album-title").text(e.target.title);
  $(".album-title").attr("title", e.target.title);

  albumTrack[e.target.dataset.index].forEach((item) => {
    let trackList_item = item.title
      ? `<li>${item.song} <span>TITLE</span></li>`
      : `<li>${item.song}</li>`;

    $(".album-trackList").append(trackList_item);
  });
});

$(".album-list").keydown((e) => {
  if (e.key === " ") {
    if (e.target.tagName === "LI") {
      $(".album-trackList").empty();
      $(".modal")[0].showModal();
      $(".modal").css("background-image", `url(${e.target.children[0].src})`);
      $(".album-title").text(e.target.title);
      $(".album-title").attr("title", e.target.children[0].title);

      albumTrack[e.target.children[0].dataset.index].forEach((item) => {
        let trackList_item = item.title
          ? `<li>${item.song} <span>TITLE</span></li>`
          : `<li>${item.song}</li>`;

        $(".album-trackList").append(trackList_item);
      });
    }
  }
});

$(".close_btn").click((e) => {
  $(".modal")[0].close();
});

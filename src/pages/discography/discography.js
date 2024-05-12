import setTitle from "../../lib/setTitle.js";
import pb from "../../api/pocketbase.js";

setTitle("Discography");

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
      } 앨범 커버" title="${item.albumName}" />
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

// // 스켈레톤 요소
// const skeletonItem = document.querySelectorAll(".skeleton_loading");
// // 스켈레톤 요소 전체 삭제
// const hideskeleton = () => {
//   skeletonItem.forEach((element) => {
//     $(element).fadeOut();
//   });
// };
// // 테스트 코드 (페이지 로딩을 위해 2초간 스켈레톤 애니메이션이 보여짐)
// window.onload = setTimeout(hideskeleton, 2000);
// // 실제 코드 (실제로 사용될 코드)
// // window.onload = hideskeleton;

// let img = `
//   <img
//     src="https://media.vlpt.us/images/gicomong/post/65a7ef5e-f64a-425e-b4bb-998478e5c8c9/11.png"
//     alt="test 중">
//   </img>
//   `;

// function loadImg() {
//   $(".album-list").append(img);
// }

// window.onload = setTimeout(loadImg, 2000);

import setTitle from "../../lib/setTitle.js";

setTitle("Gallery");

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

let zIdx = 0;
$(document).on("click", ".img", function (e) {
  $(e.target).toggleClass("full");
  if (e.target.dataset.onoff == 1) {
    e.target.dataset.onoff = "0";
  } else {
    zIdx++;
    e.target.dataset.onoff = "1";
    $(e.target).css("z-index", `${zIdx}`);
  }
});

function imgData(title) {
  $.get(`/src/data/${title}.json`)
    .done(function (data) {
      for (let i = 0; i < data.length; i++) {
        let img = `
                  <div class="img-box ${title}">
                     <img class="img full" src="${data[i].name}" data-onoff="1" alt="">
                  </div>
                  `;
        $(".img-container-pc").append(img);
      }
    })
    .fail(function () {
      console.log("ajax 실패!");
    });
}

function imgDataMoblie(title) {
  $.get(`/src/data/${title}.json`)
    .done(function (data) {
      for (let i = 0; i < data.length; i++) {
        let img = `
                  <div class="img-box ${title}">
                     <img class="img" src="${data[i].name}" data-onoff="1" alt="">
                  </div>
                  `;
        $(".img-container-mobile").append(img);
      }
    })
    .fail(function () {
      console.log("ajax 실패!");
    });
}

function removeImg() {
  $(".ditto").remove();
  $(".omg").remove();
  $(".etc").remove();
}

//imgData('ditto');

$(".Ditto").click(function () {
  removeImg();
  imgData("ditto");
});
$(".OMG").click(function () {
  removeImg();
  imgData("omg");
});
$(".Etc").click(function () {
  removeImg();
  imgData("etc");
});

$(".Ditto-m").click(function () {
  removeImg();
  imgDataMoblie("ditto");
});
$(".OMG-m").click(function () {
  removeImg();
  imgDataMoblie("omg");
});
$(".Etc-m").click(function () {
  removeImg();
  imgDataMoblie("etc");
});

// $.get(`./ditto.json`) // pc버젼
$.get("/src/data/ditto.json") // pc버젼
  .done(function (data) {
    for (let i = 0; i < data.length; i++) {
      let img = `
               <div class="img-box ditto">
                  <img class="img full" src="${data[i].name}" data-onoff="1" alt="">
               </div>
               `;
      $(".img-container-pc").append(img);
    }
  })
  .fail(function () {
    console.log("ajax 실패!");
  });

$.get("/src/data/ditto.json") // mobile버젼
  .done(function (data) {
    for (let i = 0; i < data.length; i++) {
      let img = `
               <div class="img-box ditto">
                  <img class="img" src="${data[i].name}" data-onoff="1" alt="">
               </div>
               `;
      $(".img-container-mobile").append(img);
    }
  })
  .fail(function () {
    console.log("ajax 실패!");
  });

import setTitle from "../../lib/setTitle.js";

setTitle("Video");

const musicVideoData = [
  {
    title: "NewJeans (뉴진스) 'Attention' Official MV",
    src: "https://img.youtube.com/vi/js1CtxSY38I/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'Hype Boy' Official MV (MINJI ver.)",
    src: "https://img.youtube.com/vi/Rrf8uQFvICE/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'Hype Boy' Official MV (DANIELLE&HAERIN ver.)",
    src: "https://img.youtube.com/vi/9wUKhEgnllc/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'Hype Boy' Official MV (HYEIN ver.)",
    src: "https://img.youtube.com/vi/j6r7Px6w2ik/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'Hype Boy' Official MV (HANNI ver.)",
    src: "https://img.youtube.com/vi/jM-K-h9gUdM/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'Hurt' Official MV",
    src: "https://img.youtube.com/vi/tVIXY14aJms/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'Cookie' Official MV",
    src: "https://img.youtube.com/vi/VOmIplFAGeg/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'Ditto' Official MV (side A)",
    src: "https://img.youtube.com/vi/pSUydWEqKwE/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'Ditto' Official MV (side B)",
    src: "https://img.youtube.com/vi/V37TaRdVUQY/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'OMG' Official MV",
    src: "https://img.youtube.com/vi/_ZAgIHmHLdc/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'Zero' Official MV",
    src: "https://img.youtube.com/vi/XIOoqJyx8E4/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'New Jeans' Official MV",
    src: "https://img.youtube.com/vi/kcelgrGY1h8/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'Cool With You' Official MV (side A)",
    src: "https://img.youtube.com/vi/zsYSSVoQnP4/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'Cool With You' & 'Get Up' Official MV (side B)",
    src: "https://img.youtube.com/vi/nJDMAjwxthM/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'ASAP' Official MV",
    src: "https://img.youtube.com/vi/dJdqn5v4Dkw/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'Super Shy' Official MV",
    src: "https://img.youtube.com/vi/ArmDp-zijuc/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'ETA' Official MV",
    src: "https://img.youtube.com/vi/jOTfBlKSQYY/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'Bubble Gum' Official MV",
    src: "https://img.youtube.com/vi/ft70sAYrFyY/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'How Sweet' Official MV",
    src: "https://img.youtube.com/vi/Q3K0TOvTOno/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) 'Right Now' Official MV",
    src: "https://img.youtube.com/vi/m6pTbEz4w3o/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) ‘Supernatural’ Official MV (Part.1)",
    src: "https://img.youtube.com/vi/ZncbtRo7RXs/maxresdefault.jpg",
  },
  {
    title: "NewJeans (뉴진스) ‘Supernatural’ Official MV (Part.2)",
    src: "https://img.youtube.com/vi/A4S8zl50AdM/maxresdefault.jpg",
  },
];

musicVideoData.reverse().forEach((item) => {
  let render = `
    <li class="mv-list-item">
      <p class="title">${item.title}</p>
      <button type="button">
        <img
          src=${item.src}
          alt=${item.title}
          title=${item.title}
        />
      </button>
    </li>
  `;

  $(".mv-list").append(render);
});

$("button").click(function (e) {
  let address = "";
  let arr = [];

  if (e.target.tagName === "IMG") address = $(e.target).attr("src");
  else address = $(e.target.children[0]).attr("src");

  arr = address.split("/");
  $(".now").attr("src", `https://www.youtube-nocookie.com/embed/${arr[4]}`);
});

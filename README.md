> # NewJeans
>
> 아이돌 그룹 뉴진스를 소개하는 반응형 웹사이트<br> > https://song0331.github.io/NewJeans-/<br><br> > ![](https://velog.velcdn.com/images/thdgusrbek/post/6a8d2fb8-aa3f-4cad-a5b4-76a6ef0d6e48/image.png)<br><br><br><br>

> # 시연 영상 (1분 30초)
>
> https://youtu.be/P6AcuS7lQ5U<br><br><br><br>

> # 사용기술

- HTML
- CSS
- JavaScript
  - `JQuery`<br><br><br><br>

> # Flow Chart (흐름도)
>
> ![](https://velog.velcdn.com/images/thdgusrbek/post/015483c3-d0af-4cad-a396-df375bc46d45/image.png)<br><br><br><br>

> # 폴더 구조
>
> ![](https://velog.velcdn.com/images/thdgusrbek/post/9bb80ce6-04a6-4672-affb-aaebfb569e6d/image.png)<br><br><br><br>

> # 주요기능

- 프로필<br><br>
  ![ezgif com-video-to-gif](https://github.com/HyunKyu-Song/NewJeans-/assets/108565747/b3a17c17-c6f3-466d-a887-8c943ae75bfd)<br><br><br><br>
- 앨범<br><br>
  ![ezgif com-video-to-gif (4)](https://github.com/HyunKyu-Song/NewJeans-/assets/108565747/1ef88cf3-93c7-4840-9c32-ca739de9f9a1)<br><br><br><br>
- 갤러리<br><br>
  ![ezgif com-video-to-gif (5)](https://github.com/HyunKyu-Song/NewJeans-/assets/108565747/8ba52912-4dfc-4cd9-94a5-eece511cc3a9)<br><br><br><br>
- 뮤직 비디오<br><br>
  ![](https://velog.velcdn.com/images/thdgusrbek/post/4eb36bfb-4420-447f-9558-888c7dd724ad/image.gif)<br><br><br><br>

> # 주요로직

- 좌우버튼으로 앨범 이동

```js
pageCnt = 0;
$(".right").click(function () {
  // 오른쪽 버튼 클릭 시 pageCnt값이 1증가
  if (pageCnt < 3) {
    pageCnt++;
    bg(); // bg함수를 호출해서 pageCnt값에 맞게 css가 변경됨
  }
});
$(".left").click(function () {
  // 왼쪽 버튼 클릭 시 pageCnt값이 1감소
  if (pageCnt > 0) {
    pageCnt--;
    bg(); // bg함수를 호출해서 pageCnt값에 맞게 css가 변경됨
  }
});
```

```js
function bg() {
  // 앨범 사진을 url에 맞게 변경, 앨범에 맞는 색으로 변경, translateX도 변경
  if (pageCnt == 0) {
    $(".discography-bg").css(
      "background-image",
      "url(https://hyunkyu-song.github.io/newjeans/discography/0.jpg)"
    );
    $(".left").css("color", "cornflowerblue");
    $(".right").css("color", "cornflowerblue");
    $(".album1").css("transform", "translateX(0px)");
    $(".album2").css("transform", "translateX(3000px)");
    $(".album3").css("transform", "translateX(3000px)");
    $(".album4").css("transform", "translateX(3000px)");
  } else if (pageCnt == 1) {
    $(".discography-bg").css(
      "background-image",
      "url(https://hyunkyu-song.github.io/newjeans/discography/1.jpg)"
    );
    $(".left").css("color", "#cd4d62");
    $(".right").css("color", "#cd4d62");
    $(".album1").css("transform", "translateX(3000px)");
    $(".album2").css("transform", "translateX(0px)");
    $(".album3").css("transform", "translateX(3000px)");
    $(".album4").css("transform", "translateX(3000px)");
  } else if (pageCnt == 2) {
    $(".discography-bg").css(
      "background-image",
      "url(https://hyunkyu-song.github.io/newjeans/discography/2.jpg)"
    );
    $(".left").css("color", "#505050");
    $(".right").css("color", "#505050");
    $(".album1").css("transform", "translateX(3000px)");
    $(".album2").css("transform", "translateX(3000px)");
    $(".album3").css("transform", "translateX(0px)");
    $(".album4").css("transform", "translateX(3000px)");
  } else if (pageCnt == 3) {
    $(".discography-bg").css(
      "background-image",
      "url(https://hyunkyu-song.github.io/newjeans/discography/3.jpg)"
    );
    $(".left").css("color", "#c6596b");
    $(".right").css("color", "#c6596b");
    $(".album1").css("transform", "translateX(3000px)");
    $(".album2").css("transform", "translateX(3000px)");
    $(".album3").css("transform", "translateX(3000px)");
    $(".album4").css("transform", "translateX(0px)");
  }
}
```

<br><br>

- 갤러리에서 사진 보여주기

```js
$.get(`./ditto.json`) // AJAX를 사용해서 JSON파일에 내용을 불러온다.
  .done(function (data) {
    for (let i = 0; i < data.length; i++) {
      let img = `
         <div class="img-box ditto">
            <img class="img full" src="${data[i].name}" data-onoff="1" alt="">
         </div>
         `;
      $(".img-container-pc").append(img); // 변수 img에 들어간 html을 img-container-pc 요소에 append 시킨다.
    }
  })
  .fail(function () {
    console.log("ajax 실패!");
  });
```

```js
let zIdx = 0; // z-index 값을 나타냄
$(document).on("click", ".img", function (e) {
  $(e.target).toggleClass("full"); // 클릭한 사진은 클래스(full)가 제거되고, 뒤쪽에 작은 사진으로 남는다.
  if (e.target.dataset.onoff == 1) {
    // 처음에는 모두 1을 가지고 있는데, 사진 클릭 시 0으로 변경
    e.target.dataset.onoff = "0";
  } else {
    // 작아진 사진을 클릭 시 z-index값이 1씩 증가하고, 클래스(full)가 생겨 사진이 커진다.
    zIdx++; // 클릭 할 때마다 z-index가 증가해서 맨 앞쪽에 사진이 z-index가 가장 높음
    e.target.dataset.onoff = "1";
    $(e.target).css("z-index", `${zIdx}`);
  }
});
```

```js
function imgData(title) {
  // 파라미터 값을 받아 html을 생성해준다.
  $.get(`./${title}.json`)
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
```

```js
function removeImg() {
  // 해당 클래스 요소를 삭제해준다.
  $(".ditto").remove();
  $(".omg").remove();
  $(".etc").remove();
}
```

```js
// 해당 클래스를 클릭 시 removeImg함수를 호출 후 imgData에 해당 인자를 전달해서 호출한다.
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
```

<br><br>

- 썸네일 클릭 시 해당 뮤직 비디오로 변경

```html
<!--
유튜브 동영상을 iframe태그로 가져오면 된다.
가져온 태그에서 src가 핵심이며 특히, embed/ 다음에 오는 값이 동영상을 정한다.
-->
<div class="mv-show">
  <iframe
    class="now"
    src="https://www.youtube-nocookie.com/embed/js1CtxSY38I"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>
```

```html
<div class="mv-list-item">
  <div class="title">NewJeans (뉴진스) 'Attention' Official MV</div>
  <img
    src="https://img.youtube.com/vi/js1CtxSY38I/maxresdefault.jpg"
    alt="mv"
  />
  <!-- 
https://img.youtube.com/vi/js1CtxSY38I/maxresdefault.jpg는 유튜브 썸네일이다.
ex)
https://img.youtube.com/vi/????/0.jpg //상하여백 있음
https://img.youtube.com/vi/????/mqdefault.jpg  //상하여백 없음
https://img.youtube.com/vi/????/maxresdefault.jpg //최대 크기, 퀄리티
--></div>
```

```js
$("img").click(function (e) {
  let address = $(e.target).attr("src"); // 원하는 img를 클릭 하여 해당 src를 address에 저장한다.
  let arr = [];
  arr = address.split("/"); // split를 사용해서 구분자(/)에 따라 값을 배열에 저장
  // ex)
  // arr[0] = "https:"
  // arr[1] = ""
  // arr[2] = "img.youtube.com"
  // arr[3] = "vi"
  // arr[4] = "js1CtxSY38I"
  // arr[5] = "maxresdefault.jpg"
  $(".now").attr("src", `https://www.youtube-nocookie.com/embed/${arr[4]}`);
});
```

<br><br><br>

> # 후기
>
> 프로젝트 구상, 기획 단계에서 간단한 틀만 짜고 시작했던 나를 원망하게 되었다.
> 자세한 구상, 기획이 귀찮아서 '대충 이런 식으로 하면 되겠지 뭐' 이런 생각이 나중에 ⛄스노우볼이 되어 돌아왔다.<br><br>

### 기획, 설계단계를 확실히 하자

- `철거가 일상` 🔨
  일단 구현만 하자는 생각으로 코드를 작성하고 보면 화면 크기에 따라 UI가 잘리거나 변질된다.
  그럼 이렇게 저렇게 코드를 수정해 보다가 결국 다 지우고 처음부터 구조를 다시 설계한 적이 여러 번 있다.🤦‍♂️<br><br><br>
- `로뎅의 생각하는 사람` 💭
  자꾸 모니터 앞에서 생각하게 된다. 물론 생각하는 것이 나쁜 것은 아니지만 코드 작성에 비해 생각하는 시간이 너무 길다.
  여기서 말한 생각이란 코드짜는 것에 대한 생각이 아닌 진짜 뭘 만들지에 대한 생각이다.<br>
  이런 상황에서 최악은 새로운 것을 생각하기 위해 검색 중 재밌는 것을 발견하면 그것에 빠져 놀게 된다는 점이다.🤦‍♂️🤦‍♂️🤦‍♂️<br>
  이럴 때, 드는 생각은 '아... 처음에 구상해둘걸 그랬다.'😓<br><br><br>

### 디자인은 쉽지 않다

기능을 구현하는 것도 쉽지 않지만, 디자인도 만만치 않다. 좋은 기능도 디자인이 엉성하면 사이트 자체가 🤮구려 보이기 때문이다.<br><br>

#### 프로젝트를 해보며 느낀 디자인의 3요소 📏 🎨 ✍

- `Size` 📏
  UI 크기는 어떤 페이지인가❓ 무엇을 의도하는가❓ 글, 사진을 가리는가❓ 등등 많은 것을 고려해서 결정해야 한다. 그렇게 결정해서 크기를 정해도 추가할 UI가 있다면 똑같은 고민을 또 해야한다.<br><br><br>
- `Color` 🎨
  이게 사람을 미치게 한다.😵<br>
  원래 `red🔴, blue🔵, green🟢, black⚫`처럼 익숙한 색만 알았는데, 이번 프로젝트를 하며 `#d860fca0, #0011ffe9, #303030`등등 많은 색깔 코드를 알게되었다.<br>
  약간에 미세한 코드 조절로 글씨, 배경색에 많은 영향을 주기 때문에 수십 번은 넘게 색을 바꾸곤 했다.<br><br><br>
- `Font` ✍
  기본 폰트만 쓰던 사이트에 새로운 폰트를 적용해보고 신세계를 보았다.😲
  폰트만 바꿔도 훨씬 미학적으로 좋았다.<br><br> ~~"깔끔하잖아, 재미로도 미학적으로도"~~<br><br><br>
  **폰트 사용할 때, 주의할 점**
  - 영어 전용 폰트와 한글 전용 폰트를 구별해서 사용
  - 다운받은 폰트에 있는 두께 사용 (CSS로 font-size 억지로 조절X)<br><br>

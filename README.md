# NewJeans

아이돌 그룹 뉴진스를 소개하는 반응형 웹사이트<br><br>
![](https://velog.velcdn.com/images/thdgusrbek/post/24610de8-9657-4438-a629-4111886c63a1/image.png)

---

<br>

### 사용기술

- HTML
- CSS
- JavaScript
- JQuery

---

<br>

### Flow Chart (흐름도)

![](https://velog.velcdn.com/images/thdgusrbek/post/015483c3-d0af-4cad-a396-df375bc46d45/image.png)

---

<br>

### 폴더 구조

![](https://velog.velcdn.com/images/thdgusrbek/post/334b8820-1d47-4735-929e-18442e217873/image.png)

---

<br>

### 주요기능

#### 프로필

![ezgif com-video-to-gif](https://github.com/HyunKyu-Song/NewJeans-/assets/108565747/b3a17c17-c6f3-466d-a887-8c943ae75bfd)<br><br><br><br>

#### 앨범

![ezgif com-video-to-gif (4)](https://github.com/HyunKyu-Song/NewJeans-/assets/108565747/1ef88cf3-93c7-4840-9c32-ca739de9f9a1)<br><br><br><br>

#### 갤러리

![ezgif com-video-to-gif (5)](https://github.com/HyunKyu-Song/NewJeans-/assets/108565747/8ba52912-4dfc-4cd9-94a5-eece511cc3a9)<br><br><br><br>

#### 뮤직 비디오

![](https://velog.velcdn.com/images/thdgusrbek/post/4eb36bfb-4420-447f-9558-888c7dd724ad/image.gif)

---

<br>

### 트러블 슈팅 (Trouble shooting)

기존 파일구조는 단순하게 `index.html`, `profile.html`, `video.html`, ... 이런식으로 폴더를 구분하지 않고 사용했다.

그러다, 용도에 맞게 파일을 구분하기 위해 고민하던 중 `Vite`를 사용하게 되었다.

하지만, `Vite`를 사용해서 배포했지만 문제가 생겼다.
Github는 레포지토리 이름이 기본적으로 url에 추가되기 때문에 개발단계에서는 경로에 문제가 없었지만 배포 후 경로에 레포지토리 이름이 추가되어 문제가 발생했다.

이를 해결하기 위해 [Vite 공식문서](https://ko.vitejs.dev/guide/env-and-mode.html#env-variables)를 찾아보았다.

vite설정에 base값을 변경하게되면 빌드시 정적 자산의 위치를 정확하게 찾지 못하는 문제가 발생할 수 있다.
이를 해결하기 위해 base값을 dev모드에선 활성화 하지 않고 배포 모드(production)에서만 경로를 심어주어 해당 문제를 해결할 수 있다.

```jsx
// 배포 모드(production)라면 '/NewJeans/'를 넣고 그렇지 않으면 '/'을 기본 url로 설정
base: process.env.NODE_ENV === 'production' ? '/NewJeans/' : '/',

// 이렇게 환경변수를 사용해  base의 주소를 조건처리하면 된다.
```

<br>

이후 `a태그` 경로도 수정이 필요하다.
절대경로가 아닌 상대경로를 심어주어 빌드시 제대로된 경로를 찾을 수 있도록 만들었다.

```jsx
// %BASE_URL% 자리에 '/NewJeans/' 또는 '/' 값이 심어진다.
<a title="프로필" href="%BASE_URL%src/pages/profile/">
  PROFILE
</a>
```

<br>

#### 이렇게 Github에 경로 문제를 해결할 수 있었다.

- 메인 페이지
  ![](https://velog.velcdn.com/images/thdgusrbek/post/f7d9b1fd-d83d-4a5c-a635-678363f9f481/image.png)<br><br>
- 프로필 페이지
  ![](https://velog.velcdn.com/images/thdgusrbek/post/0abe3a12-3161-4e2d-8caa-6e6f6a1e0982/image.png)

---

<br>

### 후기

#### 기획, 설계단계를 확실히 하자

일단 구현만 하자는 생각으로 코드를 작성하고 보면 화면 크기에 따라 UI가 잘리거나 변질된다.
그럼 이렇게 저렇게 코드를 수정해 보다가 결국 다 지우고 처음부터 구조를 다시 설계한 적이 여러 번 있다.<br>

#### 디자인은 쉽지 않다

기능을 구현하는 것도 쉽지 않지만, 디자인도 만만치 않다.
좋은 기능도 디자인이 엉성하면 사이트 자체가 구려 보이기 때문이다.<br><br>

#### 프로젝트를 해보며 느낀 디자인의 3요소 📏 🎨 ✍

- `Size` 📏
  UI 크기는 어떤 페이지인가❓ 무엇을 의도하는가❓ 글, 사진을 가리는가❓ 등등 많은 것을 고려해서 결정해야 한다. 그렇게 결정해서 크기를 정해도 추가할 UI가 있다면 똑같은 고민을 또 해야한다.<br><br><br>
- `Color` 🎨
  원래 `red🔴`, `blue🔵`, `green🟢`, `black⚫`처럼 익숙한 색만 알았는데, 이번 프로젝트를 하며 `#d860fca0`, `#0011ffe9`, `#303030`등등 많은 색깔 코드를 알게되었다.
  미세한 조절로 글씨, 배경색에 많은 영향을 주기 때문에 수십 번은 넘게 색을 바꾸곤 했다.<br><br><br>
- `Font` ✍
  기본 폰트만 쓰던 사이트에 새로운 폰트를 적용해보고 신세계를 보았다.
  폰트만 바꿔도 훨씬 미학적으로 좋았다.

#### 폰트 사용할 때, 주의할 점

- 영어 전용 폰트와 한글 전용 폰트를 구별해서 사용
- 다운받은 폰트 굵기 사용 (CSS로 억지로 조절X)

---

<br>

### [💻Demo](https://song0331.github.io/NewJeans/)

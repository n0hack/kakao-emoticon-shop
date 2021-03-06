# 카카오 이모티콘샵

![카카오 이모티콘샵](./docs/intro-header.png)

## 프로젝트 소개 📝

<p align="justify">
게임 데이터 분석가로의 길을 멈추고, 다시 개발 분야로 돌아와 자신감을 찾기 위해 진행한 첫 프론트엔드 프로젝트(클론 코딩)입니다. 개인적으로 카카오(Kakao)에서 운영 중인 서비스들의 웹사이트 구성이 마음에 들어 그 중 하나인 <a href="https://e.kakao.com/" target="_blank">카카오 이모티콘샵</a>을 주제로 선택하게 되었고, 프론트엔드를 구성하는 기본 요소인 [HTML/CSS/JS] 세 가지만을 사용해 진행했습니다.
</p>

- [프로젝트 후기 (티스토리)](https://nohack.tistory.com/121)
- [프로젝트 사이트 (GitHub)](https://n0hack.github.io/kakao-emoticon-shop)

<br>

## 웹사이트 화면 💻

|   홈    |  스타일  |
| :-----: | :------: |
| ![main] | ![style] |

|  신규  |  인기  |
| :----: | :----: |
| ![new] | ![hot] |

| 마이페이지 | 서브페이지 |
| :--------: | :--------: |
| ![mypage]  | ![subpage] |

<br>

## 사용한 기술 🔥

|  HTML   |  CSS   | JavaScript | Deploy |
| :-----: | :----: | :--------: | :----: |
| ![HTML] | ![CSS] |   ![JS]    | ![GIT] |

**HTML / CSS**

<p align="justify">
프론트엔드 프로젝트인 만큼 빠질 수 없는 마크업 언어 HTML과 스타일 언어 CSS를 사용했습니다. 웹사이트를 만들 때 항상 클래스 이름을 짓는 부분에서 많은 시간을 소요하곤 했었는데, <a href="http://getbem.com/" target="_blank">BEM(Block Element Modifier</a>이라 하는 네이밍 방법론을 알게 되어 이를 적용해 봤습니다.
</p>

**JavaScript**

<p align="justify">
카카오 이모티콘 샵을 살펴 보면 배너 이미지가 시간이 지남에 따라 다음 이미지로 자동 전환되고, 무한 스크롤 및 터치 스크롤(마치 모바일에서 이용하는 것 같은) 등이 구현되어 있습니다. 배너 이미지가 자동으로 전환되는 것은 <a href="https://kenwheeler.github.io/slick/" target="_blank">Slick Slider</a> 라이브러리를 사용했으며, 무한 스크롤과 터치 스크롤은 직접 구현했습니다.
</p>

**Deploy**

<p align="justify">
간단하게 만든 웹사이트이기 때문에 배포 역시 처음에는 GitHub Pages를 이용해 보는 것이 좋다는 생각이 들었습니다. 저장소에 프로젝트 등록 이후 갱신되는 데까지는 약간의 시간이 소요되지만, 그래도 무료로 간편하게 이용할 수 있다는 점이 큰 장점같습니다.
</p>

<br>

## 달성한 목표 👏

### 무한 스크롤 구현

<p align="justify">
무한 스크롤을 구현할 때는 scroll 이벤트를 등록하는 방법과 WebAPI 중 하나인 <a href="https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API" target="_blank">IntersectionObserver</a>를 사용하는 방법이 있습니다. 저는 IntersectionObserver로 구현했으며, scroll 이벤트 방식과 달리 이 API는 작업을 비동기로 처리하기 때문에 성능 이슈 없이 사용할 수 있습니다.
</p>

### 이미지 지연 로딩

<p align="justify">
웹사이트의 한 화면 내에는 무수히 많은 데이터가 존재하며, 그 중에서 이미지와 같은 미디어 리소스가 많은 용량을 차지합니다. 따라서 사용자가 보지 않는 영역에 대해서는 이미지를 불러올 필요가 없기 때문에 이를 지연 로딩(Lazy Loading) 처리하는 것이 좋습니다.<br><br>모든 화면을 대상으로 처리하지는 않았고, 무한 스크롤이 구현된 페이지에서만 두 가지 방법으로 구현했습니다. 첫 번째는 <b>이미지 태그에 "loading=lazy" 옵션</b>을 주는 방법, 그리고 두 번째는 무한 스크롤에 따라 <b>컨텐츠를 불러오는 순간에 "src=path" 옵션을 결정</b>하는 식으로 처리했습니다.
</p>

### 드래그 스크롤 직접 구현

<p align="justify">
드래그 스크롤(Drag Scroll)은 모바일에서의 터치 스크롤을 데스크톱 환경의 웹에서도 사용 가능하도록 한 기술입니다. 터치 스크롤(Touch Scroll)이라 하는 것이 맞는 것 같지만, 개인적으로 드래그 스크롤이라는 이름이 마음에 들어 이대로 진행했습니다. 코드는 [asset/js/lib/drag-scroll.js]에 작성했으며, 이후 다른 프로젝트에서도 재사용할 가능성이 있다는 생각이 들어 따로 라이브러리화 할 계획입니다.
</p>

<br>

## 아쉬운 점 💦

### BEM에 대한 이해

<p align="justify">
BEM이 익숙하지 않은 상태에서, 처음하는 프로젝트의 규모가 크다보니 작명과 블록 단위로 나누는 부분에서 혼란스러운 점이 많았습니다. BEM을 모르고 진행했을 때와는 그래도 큰 개선이 있었지만, 다음에는 상대적으로 규모가 작은 프로젝트를 하면서 기본기를 탄탄하게 다져야할 필요성을 느꼈습니다.
</p>

### 프로젝트 구조

<p align="justify">
최대한 예쁘고, 깔끔하게 정리해 봤지만 아무리 해도 만족되지 않았습니다. 개인마다, 팀마다 다른 거라 생각은 하지만, 다른 사이드 프로젝트도 해 보면서 좀 더 가다듬을 필요를 느꼈습니다.
</p>

### 깔끔하지 않은 코드

<p align="justify">
화면마다 CSS/JS 파일을 생성하니, 코드 중복이 많이 발생했습니다. 게다가 웹 브라우저는 파일들이 하나의 스코프로 합쳐지기 때문에 이름 충돌 문제도 발생했습니다. 리팩토링을 통해 겹치는 부분을 최대한 제거했으나, 여전히 부족한 부분이 많았습니다. 스코프 문제는 mjs 확장자로 해결할 수 있다고는 하나, 다음에는 웹팩과 같은 번들러를 사용해 아쉬움을 해소하려 합니다.
</p>

### 무한 스크롤 & 데이터

<p align="justify">
실제 데이터를 비동기적으로 불러 오면서 컨텐츠를 로드하고 싶었는데, 별도로 불러올 곳이 없어 임의로 생성한 더미 데이터(Dummy Datas)를 반복해서 사용했습니다. 이번에는 어쩔 수 없었지만, 이후 프로젝트에서는 실제 서비스처럼 데이터를 내려줄 수 있는 서버도 간단하게 마련할 생각입니다. (ex. 크롤링)
</p>

<br>

## 저작권 🚀

프로젝트에 사용된 이미지의 모든 저작권은 [카카오(Kakao)](https://www.kakaocorp.com/page/)에 있습니다.
<br><br>
&copy; NoHack & Kakao All Rights Reserved.

<!-- References -->

[main]: ./docs/home.png
[style]: ./docs/style.png
[hot]: ./docs/hot.png
[new]: ./docs/new.png
[mypage]: ./docs/mypage.png
[subpage]: ./docs/subpage.png
[html]: ./docs/html.svg
[css]: ./docs/css.svg
[js]: ./docs/javascript.svg
[git]: ./docs/github.svg

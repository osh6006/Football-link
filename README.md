<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="football-link" />

&#xa0;

  <!-- <a href="https://football-link.netlify.app">Demo</a> -->
</div>

<h1 align="center">⚽ Football Link ⚽</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/osh6006/football-link?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/osh6006/football-link?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/osh6006/football-link?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/osh6006/football-link?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/osh6006/football-link?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/osh6006/football-link?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/osh6006/football-link?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  football-link 🚀 Under construction...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#dart-소개">프로젝트 소개</a> &#xa0; | &#xa0; 
  <a href="#rocket-개발환경">개발 환경</a> &#xa0; | &#xa0;
  <a href="#rocket-채택기술전략">채택 기술 전략</a> &#xa0; | &#xa0;
  <a href="#sparkles-기능">제공 기능</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-필수사항">필수 사항</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-시작하기">시작하기</a> &#xa0; | &#xa0;
  <a href="#memo-라이센스">라이센스</a> &#xa0; | &#xa0;
  <a href="https://github.com/osh6006" target="_blank">작성자</a>
</p>

<br>

## :dart: 소개

환영합니다! 축구는 세계적으로 가장 인기 있는 스포츠 중 하나로, 수많은 팬들에게 열정과 즐거움을 안겨주고 있습니다. **Football Link** 웹 사이트는 축구를 사랑하는 여러분들을 위한 통합 정보 플랫폼으로, 다양한 나라와 해당 국가에 맞는 리그의 축구 정보를 제공합니다.

사용자가 원하는 나라와 해당 국가에 맞는 리그를 선택하여 다양한 축구 정보를 얻을 수 있으며, 주요 리그부터 소수의 작은 국가 리그까지 다양한 리그의 랭킹, 일정, 예측, 선수 정보, 팀 정보, 라이브 경기 정보 등을 제공하여 전 세계 축구 팬들에게 다양한 서비스를 제공합니다!

## :rocket: 개발환경

이 프로젝트에는 다음의 기술 및 도구가 활용 되었습니다.

### 개발

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white)

### 라이브러리

![zustand](https://img.shields.io/badge/zustand-37b24d?style=for-the-badge&logo=&logoColor=white)
![tailwindcss](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![headlessui](https://img.shields.io/badge/headlessui-66E3FF?style=for-the-badge&logo=headlessui&logoColor=white)
![reactquery](https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![TanStackTable](https://img.shields.io/badge/TanStackTable-FF4154?style=for-the-badge&logo=reacttable&logoColor=white)

### 백엔드 API

![rapid](https://img.shields.io/badge/rapid-0055DA?style=for-the-badge&logo=rapid&logoColor=white)
![supabase](https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)

### 배포

![vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## :rocket: 채택기술전략

### React, tailwindcss

- React

  - React는 컴포넌트 기반 아키텍처를 이용하여 UI를 여러 개의 독립적이고 재사용 가능한 컴포넌트로 나눌 수 있게 해줍니다. 이러한 구조를 통해 코드를 구성하면서 유지 보수가 쉬워지고, 개발 속도를 향상시킬 수 있었습니다.

- tailwindcss

  - Tailwind CSS는 클래스 기반의 스타일링을 제공하여 CSS를 직접 작성하는 번거로움을 줄여줍니다. 컴포넌트에 바로 인라인 스타일 처럼 적용할 수 있어 빠르게 작업이 가능했습니다. 또한 반응형 스타일도 직관적으로 지정할 수 있기 때문에 반응형 디자인도 쉽게 적용이 가능했습니다.
  - tailwindconfig.js 파일을 통해 color, size, animation 설정을 전역으로 설정할 수 있기 때문에 매우 빠른 스타일링 작업이 가능했습니다.
  - headlessui 와 연동이 가능하기 때문에 avatar-menu, modal등 다양한 headlessui 컴포넌트에 적용이 가능 했습니다.

### Zustand

- 불필요한 props 전달을 방지하기 위해서 발생합니다. 따라서, 필요한 컴포넌트 내부에서만 상태 값을 가져다 사용하기 위해 상태 관리 라이브러리를 사용하기로 했습니다.

- zustand는 다른 상태 관리 라이브러리와는 다르게 provider로 감싸지 않고 어디서든 사용이 가능합니다. 따라서 다른 상태 관리 라이브러리보다 사용하기 쉽고 코드도 더욱 간단했습니다.

- immer, persist와 같은 강력한 미들웨어 기능이 있어 불변성을 유지하여 상태를 업데이트 하거나, 스토리지 기능을 아주 간단히 사용할 수 있습니다.

- 프로젝트에는 immer와 persist를 병합하여 전역으로 theme이나 나라선택, 리그선택을 저장하고 있는 방식으로 사용했습니다.

### React Query, Tanstack Table

- React query

  - React query는 서버로 부터 받은 데이터를 쉽게 다룰 수 있는(loading, data, error등) 훅을 제공하고 있어 rapid api에서 다양한 데이터를 받고 있는 현 웹사이트에 적합하다고 판단 하였습니다.

  - 오직 서버상태만을 관리할 수 있기 때문에 코드를 깔끔하게 유지할 수 있었습니다.

  - 데이터 캐싱 시간을 설정할 수 있어 서버에서 라이브 경기 데이터를 받을 때 캐싱 타임을 조절할 수 있었습니다.

- Tanstack table
  - Tanstack table은 react query를 만든 팀에서 만든 table을 위한 라이브러리로 직관적인 api와 다양한 기능(정렬, 페이징, 그룹화)을 제공합니다. 현 웹사이트에서는 랭크 페이지의 팀 순위 플레이어 순위를 제공할 때 사용 하였습니다.

### Rapid API, Supabase

- Rapid API

  - Rapid API는 수많은 다양한 API를 한 곳에서 제공하며, 웹 서비스, 데이터베이스, 기계 학습, 인증 및 결제, 게임, 미디어 등 다양한 카테고리의 API를 포함하고 있어서 다양한 개발 요구사항에 적합한 API를 쉽게 찾을 수 있습니다.
  - 그 중에서도 현 웹사이트에서는 Rapid API에서 제공하는 football api를 사용하여 다양한 축구에 대한 정보를 얻을 수 있었습니다.

- Supabase

  - Supabase는 서버리스 백엔드를 제공하여 개발자가 별도의 서버 구축 없이도 애플리케이션을 빠르게 개발할 수 있었습니다.
  - 또한 데이터베이스, 인증, 파일 스토리지 등의 기능을 클라우드에서 제공하여 개발 과정을 간소화 하였습니다.
  - 현 웹사이트에서는 Supabase를 통해 SNS 로그인 및 로그아웃, 배너 사진의 스토리지, 로그인을 한 유저에게만 주어지는 특별한 기능(두 팀의 승리예측 기능)에 사용되고 있습니다.

## :sparkles: 기능

:heavy_check_mark: 로그인: SNS (Google, Github) 로그인 및 로그아웃 기능\
:heavy_check_mark: 국가 및 리그 선택: 사용자는 나라와 해당 국가에 맞는 리그를 선택하여 정보를 얻을 수 있습니다.\
:heavy_check_mark: 일정: 경기 일정을 조회하고, 날짜와 시간을 확인할 수 있습니다.\
:heavy_check_mark: 실시간 경기 정보: 실시간 경기 정보(라인업, 이벤트, 통계)를 확인할 수 있습니다.\
:heavy_check_mark: 예측: 두 팀간에 경기 예측을 할 수 있는 기능을 제공합니다. (로그인 후 사용 가능)\
:heavy_check_mark: 리그 순위: 실시간 팀 순위와 전적 정보를 알 수 있습니다.\
:heavy_check_mark: 팀 정보: 팀의 통계, 선수 명단 등을 확인할 수 있습니다.\
:heavy_check_mark: 선수 정보: 팀의 선수들에 대한 정보를 제공합니다.

## :white_check_mark: 필수사항

⭐ 프로젝트를 시작하기 전에 `Git`와 `NodeJS`를 설치해 주세요 ⭐

## :checkered_flag: 시작하기

```bash
# 프로젝트를 복제하세요
$ git clone https://github.com/osh6006/football-link

# 폴더로 이동하세요
$ cd football-link

# 필요한 디펜던시를 설치하세요
$ npm install

# 프로젝트를 실행하세요
$ npm start

# 이 프로젝트는 <http://localhost:3000>에서 실행됩니다!
```

## :memo: 라이센스

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/osh6006" target="_blank">osh6006</a>

&#xa0;

<a href="#top">Back to top</a>

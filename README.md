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
  <a href="#dart-프로젝트소개">프로젝트 소개</a> &#xa0; | &#xa0; 
  <a href="#rocket-개발 환경">개발 환경</a> &#xa0; | &#xa0;
  <a href="#rocket-기술 채택 이유">기술 채택 이유</a> &#xa0; | &#xa0;
  <a href="#sparkles-제공 기능">제공 기능</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-필수 사항">필수 사항</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-프로젝트 시작하기">프로젝트 시작하기</a> &#xa0; | &#xa0;
  <a href="#memo-라이센스">라이센스</a> &#xa0; | &#xa0;
  <a href="https://github.com/osh6006" target="_blank">작성자</a>
</p>

<br>

## :dart: 프로젝트소개

환영합니다! 축구는 세계적으로 가장 인기 있는 스포츠 중 하나로, 수많은 팬들에게 열정과 즐거움을 안겨주고 있습니다. **Football Link** 웹 사이트는 축구를 사랑하는 여러분들을 위한 통합 정보 플랫폼으로, 다양한 나라와 해당 국가에 맞는 리그의 축구 정보를 제공합니다.

사용자가 원하는 나라와 해당 국가에 맞는 리그를 선택하여 다양한 축구 정보를 얻을 수 있으며, 주요 리그부터 소수의 작은 국가 리그까지 다양한 리그의 랭킹, 일정, 예측, 선수 정보, 팀 정보, 라이브 경기 정보 등을 제공하여 전 세계 축구 팬들에게 다양한 서비스를 제공합니다!

## :rocket: 개발 환경

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

## 기술 채택 이유

### React, styled-component

- React
  컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
  유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.

- styled-component

  - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
  - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.
  - S dot naming을 통해 일반 컴포넌트와 스타일드 컴포넌트를 쉽게 구별하도록 했습니다.

### Recoil

- 최상위 컴포넌트를 만들어 props로 유저 정보를 내려주는 방식의 경우 불필요한 props 전달이 발생합니다. 따라서, 필요한 컴포넌트 내부에서만 상태 값을 가져다 사용하기 위해 상태 관리 라이브러리를 사용하기로 했습니다.
- Redux가 아닌 Recoil을 채택한 이유

  - Recoil은 React만을 위한 라이브러리로, 사용법도 기존의 useState 훅을 사용하는 방식과 유사해 학습비용을 낮출 수 있었습니다.
  - 또한 Redux보다 훨씬 적은 코드라인으로 작동 가능하다는 장점이 있었습니다.
    로그인과 최초 프로필 설정 시 유저 정보를 atom에 저장하여 필요한 컴포넌트에서 구독하는 방식으로 사용했습니다.

### React Query, Tanstack Table

-

### Rapid API, Supabase

## :sparkles: 제공 기능

:heavy_check_mark: 로그인: SNS (Google, Github) 로그인 및 로그아웃 기능\
:heavy_check_mark: 국가 및 리그 선택: 사용자는 나라와 해당 국가에 맞는 리그를 선택하여 정보를 얻을 수 있습니다.\
:heavy_check_mark: 일정: 경기 일정을 조회하고, 날짜와 시간을 확인할 수 있습니다.\
:heavy_check_mark: 실시간 경기 정보: 실시간 경기 정보(라인업, 이벤트, 통계)를 확인할 수 있습니다.\
:heavy_check_mark: 예측: 두 팀간에 경기 예측을 할 수 있는 기능을 제공합니다. (로그인 후 사용 가능)\
:heavy_check_mark: 리그 순위: 실시간 팀 순위와 전적 정보를 알 수 있습니다.\
:heavy_check_mark: 팀 정보: 팀의 통계, 선수 명단 등을 확인할 수 있습니다.\
:heavy_check_mark: 선수 정보: 팀의 선수들에 대한 정보를 제공합니다.

## :white_check_mark: 필수 사항

⭐ 프로젝트를 시작하기 전에 `Git`와 `NodeJS`를 설치해 주세요 ⭐

## :checkered_flag: 프로젝트 시작하기

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

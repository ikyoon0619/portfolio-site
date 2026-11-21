# 윤인규 포트폴리오

Java/Spring 백엔드와 LLM 서비스 개발자 윤인규의 포트폴리오 사이트입니다.

**사이트**: https://portfolio-site-ikyoon.netlify.app

## 기술 스택

- Vue 3 (Composition API, `<script setup>`)
- Vite
- Netlify (main 브랜치 푸시 시 자동 배포)

## 구조

화면 코드와 내용 데이터를 분리했습니다. 지원하는 직무에 따라 `src/data/projects.js`의 순서만 바꾸면 대표 프로젝트가 바뀝니다.

```
src/
├── components/   # 섹션별 화면 (NavBar, Hero, Projects, Career, Skills, Contact)
├── data/         # 화면에 보이는 내용 (profile, projects, career, skills)
├── App.vue
└── style.css     # 공통 스타일, 색 변수
```

## 로컬 실행

```bash
npm install
npm run dev
```

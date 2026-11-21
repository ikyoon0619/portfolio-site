// 배열 순서 = 화면에 보이는 순서. 자바 직무에 지원할 땐 pharmacy-backend를 맨 앞으로 옮기면 됨
export const projects = [
  {
    id: "ai-cs-agent",
    title: "AI 고객상담 에이전트",
    summary:
      "차량 카탈로그 PDF를 근거로 답하고 출처 페이지를 붙이는 RAG 상담 서비스",
    tags: ["Python", "LangChain", "Claude API", "pgvector", "FastAPI"],
    github: "https://github.com/ikyoon0619/ai-cs-agent",
    demo: "",
  },
  {
    id: "pharmacy-backend",
    title: "약국 추천 백엔드",
    summary: "Spring Boot 기반 약국 추천 API (진행 중)",
    tags: ["Java", "Spring Boot", "JPA"],
    github: "https://github.com/ikyoon0619/pharmacy-backend",
    demo: "",
  },
  {
    id: "vue3-movie-app",
    title: "영화 검색 앱",
    summary: "OMDb API로 영화를 검색하는 Vue 3 앱",
    tags: ["Vue 3", "Vuex", "Netlify"],
    github: "https://github.com/ikyoon0619/vue3-movie-app",
    demo: "https://superb-croissant-161b98.netlify.app/",
  },
];

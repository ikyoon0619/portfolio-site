// 배열 순서 = 화면에 보이는 순서. 첫 번째 프로젝트는 넓은 "대표 카드"로 보임
// 자바 직무에 지원할 땐 pharmacy-backend를 맨 앞으로 옮기면 됨
export const projects = [
  {
    id: "ai-cs-agent",
    title: "AI 고객상담 에이전트",
    status: "진행 중",
    summary:
      "차량 카탈로그 PDF를 근거로 고객 질문에 답하고, 출처 페이지를 함께 보여주는 RAG 상담 서비스",
    flow: [
      "고객 질문",
      "하이브리드 검색 (pgvector + BM25)",
      "Claude",
      "출처 붙은 답변",
    ],
    highlights: [
      "26문항 평가셋을 직접 만들어 검색 품질 측정 (Hit@k, MRR)",
      "벡터 + BM25 하이브리드 검색으로 MRR 0.928 → 0.957",
      "답변마다 출처 페이지 표시, 카탈로그에 없는 질문은 거절",
      "FastAPI /chat API와 pytest 테스트",
    ],
    tags: [
      "Python",
      "LangChain",
      "Claude API",
      "pgvector",
      "FastAPI",
      "Docker",
    ],
    github: "https://github.com/ikyoon0619/ai-cs-agent",
    demo: "",
  },
  {
    id: "pharmacy-backend",
    title: "약국 추천 백엔드",
    status: "진행 중",
    summary: "Spring Boot 기반 약국 추천 API",
    flow: [],
    highlights: [
      "Spring Boot와 JPA로 약국 추천 API 설계",
      "현재 코드 구조 정리 중",
    ],
    tags: ["Java", "Spring Boot", "JPA"],
    github: "https://github.com/ikyoon0619/pharmacy-backend",
    demo: "",
  },
  {
    id: "vue3-movie-app",
    title: "영화 검색 앱",
    status: "",
    summary: "OMDb API로 영화를 검색하고 상세 정보를 보여주는 Vue 3 앱",
    flow: [],
    highlights: [
      "OMDb API 연동 영화 검색",
      "Vuex로 검색 상태 관리",
      "Netlify 배포",
    ],
    tags: ["Vue 3", "Vuex", "Netlify"],
    github: "https://github.com/ikyoon0619/vue3-movie-app",
    demo: "https://superb-croissant-161b98.netlify.app/",
  },
];

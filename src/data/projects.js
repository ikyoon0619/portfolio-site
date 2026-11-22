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
      "Render + Neon 무료 배포, 하루 질문 한도로 API 비용 보호",
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
    demo: "https://ai-cs-agent.onrender.com",
  },
  {
    id: "pharmacy-backend",
    title: "약국 추천 서비스",
    status: "",
    summary:
      "주소를 입력하면 가까운 약국 3곳과 카카오맵 길안내를 알려 주는 Spring Boot 서비스",
    flow: ["주소 입력", "좌표 변환", "약국 검색 (거리순)", "약국 3곳 + 길안내"],
    highlights: [
      "Spring Boot 3.3으로 다시 구현, 깨진 폴더 구조 정리",
      "Spring Retry: 5xx·네트워크 오류만 재시도",
      "Base62 짧은 길안내 URL (/dir/{code})",
      "테스트 21개 (JUnit 5, Mockito)",
      "Docker로 Render 무료 배포",
    ],
    tags: ["Java 17", "Spring Boot 3", "JPA", "Docker"],
    github: "https://github.com/ikyoon0619/pharmacy-backend",
    demo: "https://pharmacy-ikyoon.onrender.com",
  },
  {
    id: "vue3-movie-app",
    title: "영화 검색 앱",
    status: "",
    summary:
      "OMDb API로 영화를 검색하는 Vue 3 앱. API 키를 서버리스 함수 뒤로 숨기도록 개선",
    flow: ["검색어 입력", "Netlify Function", "OMDb API", "결과·상세"],
    highlights: [
      "API 키를 Netlify Function으로 옮겨 브라우저 코드에서 제거",
      "허용한 파라미터만 넘기는 서버리스 프록시",
      "검색 실패 안내가 뜨지 않던 버그 수정",
      "여러 페이지 결과를 Promise.all로 동시에 요청",
    ],
    tags: ["Vue 3", "Vuex", "Netlify Functions", "Node.js"],
    github: "https://github.com/ikyoon0619/vue3-movie-app",
    demo: "https://superb-croissant-161b98.netlify.app/",
  },
];

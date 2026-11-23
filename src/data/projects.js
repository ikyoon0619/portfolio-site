// 배열 순서 = 화면에 보이는 순서. 첫 번째 프로젝트는 넓은 "대표 카드"로 보임
export const projects = [
  {
    id: "ai-cs-agent",
    title: "AI 고객상담 에이전트",
    status: "",
    summary:
      "Claude가 카탈로그 검색·재고 조회·시승 예약 도구를 골라 쓰고, 예약은 상담원 승인을 거쳐 확정하는 AI 상담 에이전트",
    flow: [
      "고객 질문",
      "Claude가 도구 선택 (LangGraph)",
      "카탈로그 검색 · 재고 · 시승",
      "상담원 승인 (예약)",
      "출처 붙은 답변",
    ],
    highlights: [
      "Tool Use: 도구 4개를 Claude가 골라 호출 (RAG 검색은 그중 하나)",
      "LangGraph 그래프 + interrupt로 예약 전 상담원 승인 (human-in-the-loop)",
      "26문항 평가셋으로 검색 품질 측정, 하이브리드 검색으로 MRR 0.928 → 0.957",
      "답변마다 출처 페이지 표시, 실제로 검색된 페이지만 출처로 인정",
      "FastAPI + pytest, Render + Neon 배포, 하루 질문 한도로 API 비용 보호",
    ],
    tags: [
      "Python",
      "LangChain",
      "LangGraph",
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
    title: "AI 약국 찾기",
    status: "",
    summary:
      "\"강남역 근처 일요일 밤 10시에 여는 약국\"처럼 문장으로 물으면 Claude가 도구를 골라 실제 약국 데이터로 답하는 Spring Boot 서비스",
    flow: [
      "문장 질문",
      "Claude가 도구 선택 (Tool Use)",
      "카카오 장소 검색 · 공공데이터 영업시간",
      "약국 카드 + 영업 여부 + 길안내",
    ],
    highlights: [
      "Anthropic Java SDK로 Tool Use 루프 직접 구현 (도구 3개, 최대 4턴)",
      "약국 목록은 도구 결과로만 그려서 AI가 약국을 지어낼 수 없음",
      "공공데이터 약국 25,432곳 영업시간을 매일 수집, 자정 넘는 영업까지 계산",
      "하루·IP별 AI 사용 한도로 공개 데모 비용 보호",
      "테스트 64개 (JUnit 5, Mockito, 외부 API 없이 실행), Docker로 Render 배포",
    ],
    tags: ["Java 17", "Spring Boot 3", "Claude API", "Tool Use", "JPA", "Docker"],
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

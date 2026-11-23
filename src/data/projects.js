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
      "진행 단계·답변 실시간 표시 (SSE)",
      "약국 카드 + 영업 여부 + 길안내",
    ],
    highlights: [
      "Anthropic Java SDK로 Tool Use 루프 직접 구현 (도구 3개, 최대 4턴)",
      "약국 목록은 도구 결과로만 그려서 AI가 약국을 지어낼 수 없음",
      "공공데이터 약국 25,432곳 영업시간을 매일 수집, 자정 넘는 영업까지 계산",
      "SSE로 도구 진행 단계와 Claude 답변을 실시간 전송, 사용자가 떠나면 호출 중단",
      "테스트 74개 (JUnit 5, Mockito, 외부 API 없이 실행), Docker로 Render 배포",
    ],
    tags: ["Java 17", "Spring Boot 3", "Claude API", "Tool Use", "SSE", "JPA", "Docker"],
    github: "https://github.com/ikyoon0619/pharmacy-backend",
    demo: "https://pharmacy-ikyoon.onrender.com",
  },
  {
    id: "vue3-movie-app",
    title: "AI 영화 추천 · 검색 앱",
    status: "",
    summary:
      "\"비 오는 날 혼자 보기 좋은 영화\"처럼 기분을 적으면 Claude가 영화를 고르고, OMDb에서 실제로 있는 영화인지 확인한 뒤 보여 주는 Vue 3 앱",
    flow: [
      "기분·상황 입력",
      "Claude가 JSON으로 후보 8편",
      "OMDb로 제목·연도 검증",
      "확인된 영화만 표시",
    ],
    highlights: [
      "구조화된 출력(zod 스키마)으로 Claude 답을 항상 {제목, 연도, 이유} JSON으로 받음",
      "후보마다 OMDb에서 제목·연도를 대조해 지어낸 영화는 걸러내고, 걸러낸 후보도 따로 표시",
      "서버리스라 메모리 대신 Netlify Blobs에 하루 사용량 저장 (전체 100번, 1인 5번, IP는 해시로만)",
      "API 키는 Netlify Function 뒤에만 두고 브라우저 코드에서 제거",
      "Claude·OMDb를 가짜로 바꿔 키 없이 도는 Vitest 테스트 22개",
    ],
    tags: ["Vue 3", "Claude API", "Structured Output", "Netlify Functions", "Vitest"],
    github: "https://github.com/ikyoon0619/vue3-movie-app",
    demo: "https://superb-croissant-161b98.netlify.app/#/recommend",
  },
];

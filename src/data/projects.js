// 배열 순서 = 화면에 보이는 순서
export const projects = [
  {
    id: "purchase-approval",
    // 목록에 한 줄로 보이는 결과
    result: "동시 결재·재고 유실 문제를 락으로 해결, AWS EC2에 운영 배포",
    title: "구매요청 · 전자결재 시스템",
    status: "",
    summary:
      "직원이 구매요청서를 올리면 팀장 → 본부장 → (500만 원 이상) 구매팀장 순서로 결재하고, 승인되면 발주와 재고까지 이어지는 사내 업무 시스템 (LLM 없이 Java만)",
    flow: [
      "구매요청서 작성 · 첨부",
      "조직도로 결재선 자동 생성",
      "상신 · 승인 · 반려 (동시 처리 방지)",
      "발주 · 입고 · 재고",
      "야간 배치 통계 · 감사 로그",
    ],
    highlights: [
      "JPA 함정을 일부러 재현하고 숫자로 고침: 사용자 목록 쿼리 11번 → 1번 (N+1), 컬렉션 fetch join + 페이징",
      "같은 문서를 두 탭에서 승인하면 한 건만 반영 (낙관적 락), 동시 입고 재고 유실은 FOR UPDATE로 해결",
      "Spring Batch 야간 통계를 몇 번 다시 돌려도 결과가 같게 (JobParameters 설계 + upsert)",
      'AOP 감사 로그: 실패한 시도도 남기고(REQUIRES_NEW), 커밋에 실패한 승인을 "성공"으로 적지 않음',
      "Flyway + ddl-auto validate, Docker로 AWS EC2 배포, CI에서 MySQL 8로 실제 기동 확인, 테스트 118개",
    ],
    tags: [
      "Java 17",
      "Spring Boot 3",
      "JPA · QueryDSL",
      "Spring Batch",
      "MySQL",
      "Docker",
      "AWS EC2",
    ],
    github: "https://github.com/ikyoon0619/purchase-approval",
    demo: "http://54.180.77.43",
    demoNote:
      "체험 계정: dev1(직원) · devlead(팀장) · admin(관리자), 비밀번호 모두 pass1234",
  },
  {
    id: "ai-cs-agent",
    // 목록에 한 줄로 보이는 결과
    result: "하이브리드 검색으로 검색 정확도(MRR) 0.928에서 0.957로",
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
    // 목록에 한 줄로 보이는 결과
    result: "전국 약국 25,432곳 영업시간을 매일 갱신해 지금 문 연 약국을 찾음",
    title: "AI 약국 찾기",
    status: "",
    summary:
      '"강남역 근처 일요일 밤 10시에 여는 약국"처럼 문장으로 물으면 Claude가 도구를 골라 실제 약국 데이터로 답하는 Spring Boot 서비스',
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
    tags: [
      "Java 17",
      "Spring Boot 3",
      "Claude API",
      "Tool Use",
      "SSE",
      "JPA",
      "Docker",
    ],
    github: "https://github.com/ikyoon0619/pharmacy-backend",
    demo: "https://pharmacy-ikyoon.onrender.com",
  },
  {
    id: "vue3-movie-app",
    // 목록에 한 줄로 보이는 결과
    result: "실제로 있는 영화만 보여 주고, API 키는 서버 함수 뒤로 숨김",
    title: "AI 영화 추천 · 검색 앱",
    status: "",
    summary:
      '"비 오는 날 혼자 보기 좋은 영화"처럼 기분을 적으면 Claude가 영화를 고르고, OMDb에서 실제로 있는 영화인지 확인한 뒤 보여 주는 Vue 3 앱',
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
    tags: [
      "Vue 3",
      "Claude API",
      "Structured Output",
      "Netlify Functions",
      "Vitest",
    ],
    github: "https://github.com/ikyoon0619/vue3-movie-app",
    demo: "https://superb-croissant-161b98.netlify.app/#/recommend",
  },
];

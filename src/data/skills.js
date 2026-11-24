// "기술과 경험" 표: 기술마다 실무에서 썼는지, 프로젝트에서 썼는지, 어디서 썼는지
// kind: "실무" 또는 "프로젝트" (배지 색이 달라짐)
export const skillMatrix = [
  {
    skill: "Java · Spring Boot",
    kind: "프로젝트",
    where: "구매요청·전자결재 시스템, AI 약국 찾기",
  },
  {
    skill: "JPA · QueryDSL",
    kind: "프로젝트",
    where: "N+1, 동시 결재(낙관적 락), 재고 유실(비관적 락)을 재현하고 해결",
  },
  {
    skill: "Spring Batch · AOP",
    kind: "프로젝트",
    where: "야간 통계 배치, 감사 로그 (구매요청·전자결재)",
  },
  {
    skill: "MySQL · Flyway",
    kind: "프로젝트",
    where: "운영 DB 스키마를 마이그레이션 파일로 관리",
  },
  {
    skill: "Docker · AWS EC2",
    kind: "프로젝트",
    where: "EC2에 직접 배포, GitHub Actions로 이미지 빌드",
  },
  {
    skill: "Salesforce Apex · LWC",
    kind: "실무",
    where: "포스코 디지털 CRM (2024~2026), LG화학 디지털 CRM (2021~2023)",
  },
  {
    skill: "JavaScript",
    kind: "실무",
    where: "LG화학 해외 판매법인 고객채널 화면 개발",
  },
  {
    skill: "Linux · 네트워크",
    kind: "실무",
    where: "익스트러스 MDM 구축 (2020), 네트워크관리사 2급",
  },
  {
    skill: "Python · LLM · RAG",
    kind: "프로젝트",
    where: "AI 고객상담 에이전트 (검색 MRR 0.957, Render 배포)",
  },
  {
    skill: "Vue.js",
    kind: "프로젝트",
    where: "이 포트폴리오 사이트, AI 영화 추천 앱",
  },
];

// 자격증·어학 (최신순)
export const certifications = [
  { name: "TOEIC 790점", date: "2019.05" },
  { name: "네트워크관리사 2급", date: "2018.12" },
  { name: "정보처리산업기사", date: "2018.08" },
  { name: "컴퓨터활용능력 2급", date: "2018.07" },
];

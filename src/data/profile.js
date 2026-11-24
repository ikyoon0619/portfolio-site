// 소개 섹션에 쓰는 기본 정보
export const profile = {
  name: "윤인규",
  title: "백엔드 · LLM 서비스 개발자",
  role: "Java/Spring 백엔드 개발자", // 요약 카드의 사진 옆 한 줄
  summary:
    "총 경력 5년 3개월. Salesforce CRM 개발과 인프라 경험을 바탕으로 Java/Spring과 Python으로 서비스를 만들고, LLM 기능은 평가셋으로 측정하며 개선합니다.",
  github: "https://github.com/ikyoon0619",
  photo: "/profile.jpg", // public 폴더의 사진. 비워두면 사진 없이 보임
  email: "ikyoon0619@gmail.com",
  resumePdf: "/resume-yoon-inkyu.pdf", // public 폴더의 이력서 PDF. 비워두면 버튼이 안 보임
  // 요약 카드 "한눈에 보기" (인사 담당자가 처음 찾는 정보)
  facts: [
    { label: "총 경력", value: "5년 3개월 (회사 4곳)" },
    { label: "희망 직무", value: "Java/Spring 백엔드" },
    { label: "주력 기술", value: "Java, Spring Boot, JPA, MySQL, Docker, AWS" },
    { label: "실무 도메인", value: "제조 대기업 영업 CRM (포스코, LG화학)" },
    { label: "자격증", value: "정보처리산업기사, 네트워크관리사 2급" },
    { label: "학력", value: "학점은행제 컴퓨터공학 학사" },
    { label: "근무", value: "서울·경기, 정규직/계약직" },
  ],
};

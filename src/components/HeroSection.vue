<script setup>
import { profile } from "../data/profile";
</script>

<template>
  <section id="about" class="hero">
    <div class="inner">
      <!-- 위쪽: 왼쪽 소개 글 + 오른쪽 "한눈에 보기" 요약 카드 -->
      <div class="top">
        <div class="text">
          <h1>
            안녕하세요, <br />
            <span class="em">{{ profile.title }}</span
            ><br />
            {{ profile.name }}입니다.
          </h1>
          <p class="summary">{{ profile.summary }}</p>

          <div class="cta">
            <!-- download: 누르면 새 탭 대신 파일로 저장 -->
            <a
              v-if="profile.resumePdf"
              :href="profile.resumePdf"
              download
              class="btn primary"
              >이력서 PDF 받기</a
            >
            <a :href="profile.github" target="_blank" rel="noopener" class="btn"
              >GitHub</a
            >
            <a href="#contact" class="btn">연락하기</a>
          </div>
        </div>

        <!-- 요약 카드: 사진 + 이름 + 인사 담당자가 먼저 찾는 정보 -->
        <aside class="card" aria-labelledby="facts-title">
          <div class="who">
            <img
              v-if="profile.photo"
              :src="profile.photo"
              :alt="`${profile.name} 프로필 사진`"
              width="640"
              height="800"
            />
            <div>
              <p class="name">{{ profile.name }}</p>
              <p class="role">{{ profile.role }}</p>
            </div>
          </div>
          <h2 id="facts-title">한눈에 보기</h2>
          <!-- dl: "항목 이름(dt) - 값(dd)" 짝을 나타내는 태그 -->
          <dl class="facts">
            <template v-for="f in profile.facts" :key="f.label">
              <dt>{{ f.label }}</dt>
              <dd>{{ f.value }}</dd>
            </template>
          </dl>
        </aside>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  background: var(--bg); /* 그라데이션 없이 단색 배경 */
  border-bottom: 1px solid var(--border);
}
.inner {
  max-width: 1040px;
  margin: 0 auto;
  padding: 120px 24px 72px; /* 위 = 고정 메뉴(60px) + 여백 */
}

/* 글(남은 폭) + 요약 카드(380px) 2칸 */
.top {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 40px;
  align-items: center;
}


h1 {
  font-size: 44px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.035em;
  margin: 0 0 20px;
}
/* 인사말·이름 줄은 회색, 직무명만 검정: 색 대신 명암으로 강조 */
h1 {
  color: #9a9a96;
}
.em {
  color: var(--text);
}
.summary {
  max-width: 560px;
  font-size: 17px;
  color: var(--text-sub);
  margin: 0 0 28px;
}
.cta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* 요약 카드 */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
}
.who {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}
.who img {
  flex: none;
  width: 88px;
  height: 110px;
  object-fit: cover; /* 비율 유지하며 칸을 꽉 채우고 넘치는 부분은 자르기 */
  object-position: 50% 15%; /* 얼굴이 있는 위쪽 기준 */
  border-radius: 2px;
}
.name {
  margin: 0;
  font-size: 22px;
  font-weight: 800;
}
.role {
  margin: 2px 0 0;
  color: var(--text-sub);
  font-size: 15px;
}
.card h2 {
  margin: 16px 0 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--text-sub);
}
/* 왼쪽 항목 이름(88px) + 오른쪽 값 2칸 */
.facts {
  margin: 0;
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 10px 12px;
  font-size: 15px;
}
.facts dt {
  color: var(--text-sub);
}
.facts dd {
  margin: 0;
  font-weight: 600;
}


/* 중간 폭 (900px 이하): 카드를 글 아래로 */
@media (max-width: 900px) {
  .top {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .card {
    max-width: 520px;
  }
}

/* 폰 (600px 이하) */
@media (max-width: 600px) {
  .inner {
    padding: 100px 16px 48px;
  }
  h1 {
    font-size: 32px;
  }
  .summary {
    font-size: 16px;
  }
  .card {
    padding: 20px;
  }
}
</style>

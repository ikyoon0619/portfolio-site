<script setup>
import { profile } from "../data/profile";
</script>

<template>
  <section id="about" class="hero">
    <div class="inner">
      <!-- 초록 점 + 상태 문구 -->
      <span class="badge"
        ><span class="dot"></span>새로운 기회를 찾고 있어요</span
      >

      <h1>
        안녕하세요, <br />
        <span class="grad">{{ profile.title }}</span
        ><br />
        {{ profile.name }}입니다.
      </h1>
      <p class="summary">{{ profile.summary }}</p>

      <div class="cta">
        <a href="#projects" class="btn primary">프로젝트 보기</a>
        <a :href="profile.github" target="_blank" rel="noopener" class="btn"
          >GitHub</a
        >
      </div>

      <!-- 숫자 카드 4개 -->
      <dl class="stats">
        <div v-for="s in profile.stats" :key="s.label" class="stat">
          <dt>{{ s.label }}</dt>
          <dd>{{ s.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.hero {
  /* 오른쪽 위에 연한 보라빛이 번지는 배경 (원형 그라데이션) */
  background:
    radial-gradient(60% 60% at 85% 10%, var(--accent-soft) 0%, transparent 70%),
    var(--bg);
  border-bottom: 1px solid var(--border);
}
.inner {
  max-width: 1040px;
  margin: 0 auto;
  padding: 152px 24px 72px; /* 위 152px = 고정 메뉴(60px) + 여백 */
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px; /* 알약 모양 */
  font-size: 13px;
  font-weight: 600;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text-sub);
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e; /* 초록 = 구직 중 */
}

h1 {
  font-size: 52px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  margin: 20px 0;
}
.grad {
  background: linear-gradient(
    90deg,
    var(--accent),
    #0ea5e9
  ); /* 인디고 → 하늘색 */
  -webkit-background-clip: text; /* 사파리용 */
  background-clip: text;
  color: transparent;
}
.summary {
  max-width: 640px; /* 한 줄이 너무 길면 읽기 힘듦 */
  font-size: 18px;
  color: var(--text-sub);
  margin: 0 0 28px;
}
.cta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4칸 */
  gap: 12px;
  margin: 56px 0 0;
}
.stat {
  display: flex;
  flex-direction: column-reverse; /* dd(값)를 위로 */
  padding: 18px 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
.stat dd {
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.stat dt {
  font-size: 13px;
  color: var(--text-sub);
}

/* 태블릿·폰 (폭 760px 이하): 글자 줄이고 숫자 카드 2칸 */
@media (max-width: 760px) {
  .inner {
    padding: 112px 16px 48px;
  }
  h1 {
    font-size: 34px;
  }
  .summary {
    font-size: 16px;
  }
  .stats {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 40px;
  }
  .stat dd {
    font-size: 22px;
  }
}
</style>

<script setup>
// 부모(ProjectsSection)에게서 받는 값
defineProps({
  project: { type: Object, required: true },
  featured: { type: Boolean, default: false }, // true면 대표 카드 (가로로 넓게)
  hasDetail: { type: Boolean, default: false }, // 상세 내용이 있으면 "자세히 보기" 버튼 표시
});
// 버튼을 누르면 부모에게 "열어 주세요"라고 알림
defineEmits(["open"]);
</script>

<template>
  <article class="card" :class="{ featured }">
    <!-- 배지 줄: 둘 다 없으면 :empty 규칙으로 줄 자체가 숨겨짐 -->
    <header class="head">
      <span v-if="featured" class="label">대표 프로젝트</span>
      <span v-if="project.status" class="status">{{ project.status }}</span>
    </header>
    <h3>{{ project.title }}</h3>
    <p class="summary">{{ project.summary }}</p>

    <!-- 동작 흐름: 번호 + 단계 이름 -->
    <ol v-if="project.flow.length" class="flow">
      <li v-for="(step, i) in project.flow" :key="step">
        <span class="num">{{ i + 1 }}</span
        >{{ step }}
      </li>
    </ol>

    <ul class="highlights">
      <li v-for="h in project.highlights" :key="h">{{ h }}</li>
    </ul>

    <!-- 카드 맨 아래: 태그(왼쪽) + 버튼(오른쪽) -->
    <div class="foot">
      <div class="tags">
        <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span>
      </div>
      <div class="links">
        <button v-if="hasDetail" class="btn small" @click="$emit('open')">
          자세히 보기
        </button>
        <a
          :href="project.github"
          target="_blank"
          rel="noopener"
          class="btn small"
          >GitHub</a
        >
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener"
          class="btn small primary"
          >데모 보기 ↗</a
        >
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 28px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-3px); /* 3px 떠오름 */
  box-shadow: var(--shadow-hover); /* 그림자도 더 크게 */
}

/* 대표 카드 */
.featured {
  grid-column: 1 / -1; /* 줄 전체를 차지 */
  /* 위는 연보라, 55% 지점부터 흰색으로 */
  background: linear-gradient(180deg, var(--accent-soft), var(--surface) 55%);
  /* 테두리: 포인트색 30% + 기본 테두리색 70%를 섞은 색 */
  border-color: color-mix(in srgb, var(--accent) 30%, var(--border));
}

.head {
  display: flex;
  gap: 8px;
}
.head:empty {
  display: none; /* 배지가 하나도 없으면 빈 줄을 숨김 */
}
.label,
.status {
  font-size: 12px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
}
.label {
  background: var(--accent);
  color: #fff;
}
.status {
  background: var(--surface);
  color: var(--accent);
  border: 1px solid var(--border);
}

h3 {
  margin: 0;
  font-size: 22px;
  letter-spacing: -0.02em;
}
.featured h3 {
  font-size: 26px;
}
.summary {
  margin: 0;
  color: var(--text-sub);
}

/* 동작 흐름 */
.flow {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.flow li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  padding: 6px 12px 6px 6px; /* 왼쪽은 번호 원이 있어서 좁게 */
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border);
}
.num {
  display: grid;
  place-items: center; /* 숫자를 원 정가운데에 */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 700;
  background: var(--accent-soft);
  color: var(--accent);
}

/* 강조점 */
.highlights {
  margin: 0;
  padding: 0;
  list-style: none; /* 기본 점(•) 없애고 */
  display: grid;
  gap: 6px;
}
.featured .highlights {
  grid-template-columns: 1fr 1fr; /* 대표 카드는 2열 */
  column-gap: 24px;
}
.highlights li {
  position: relative;
  padding-left: 20px; /* ✓ 들어갈 자리 */
  font-size: 15px;
}
.highlights li::before {
  content: "✓"; /* 직접 그린 체크 표시 */
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}

/* 카드 아래 */
.foot {
  margin-top: auto; /* 카드 맨 아래로 밀기 (옆 카드와 높이 맞춤) */
  padding-top: 16px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tag {
  font-size: 12px;
  font-weight: 500;
  padding: 3px 9px;
  border-radius: 6px;
  background: var(--bg-soft);
  color: var(--text-sub);
}
.links {
  display: flex;
  gap: 8px;
}

@media (max-width: 600px) {
  .card {
    padding: 20px;
  }
  .featured .highlights {
    grid-template-columns: 1fr; /* 폰에서는 1열 */
  }
}
</style>

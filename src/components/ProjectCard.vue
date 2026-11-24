<script setup>
// 부모(ProjectsSection)에게서 받는 값
defineProps({
  project: { type: Object, required: true },
  hasDetail: { type: Boolean, default: false }, // 상세 내용이 있으면 "자세히 보기" 버튼 표시
});
// 버튼을 누르면 부모에게 "열어 주세요"라고 알림
defineEmits(["open"]);
</script>

<template>
  <!-- 한 줄짜리 목록형 카드: 왼쪽 설명, 오른쪽 기술과 버튼 -->
  <article class="row">
    <div class="main">
      <h3>{{ project.title }}</h3>
      <p class="summary">{{ project.summary }}</p>
      <p v-if="project.result" class="result">
        <strong>결과</strong> {{ project.result }}
      </p>
      <!-- 데모에 로그인이 필요하면 체험 계정 안내 (없으면 안 보임) -->
      <p v-if="project.demoNote" class="demo-note">{{ project.demoNote }}</p>
    </div>

    <div class="side">
      <p class="tags">{{ project.tags.join(" · ") }}</p>
      <div class="links">
        <button
          v-if="hasDetail"
          class="btn small primary"
          @click="$emit('open')"
        >
          자세히 보기
        </button>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener"
          class="btn small"
          >데모 ↗</a
        >
        <a
          :href="project.github"
          target="_blank"
          rel="noopener"
          class="btn small"
          >GitHub</a
        >
      </div>
    </div>
  </article>
</template>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 1fr 260px; /* 설명(남은 폭) + 기술·버튼(260px) */
  gap: 24px;
  align-items: center;
  padding: 24px 28px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: box-shadow 0.2s;
}
.row:hover {
  box-shadow: var(--shadow-hover);
}
h3 {
  margin: 0;
  font-size: 20px;
  letter-spacing: -0.02em;
}
.summary {
  margin: 6px 0 10px;
  color: var(--text-sub);
}
.result {
  margin: 0;
  font-size: 15px;
}
.result strong {
  color: var(--accent);
  margin-right: 4px;
}
.demo-note {
  margin: 10px 0 0;
  padding: 6px 10px;
  font-size: 0.875rem;
  color: var(--text-sub);
  border: 1px dashed var(--border);
  border-radius: 8px;
}
.side {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.tags {
  margin: 0;
  font-size: 13px;
  color: var(--text-sub);
}
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* 폰: 기술·버튼을 설명 아래로 */
@media (max-width: 760px) {
  .row {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 20px;
  }
}
</style>

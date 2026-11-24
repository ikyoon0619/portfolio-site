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
  <!-- 박스 대신 줄로 나눈 목록: 왼쪽 실제 화면 캡처, 오른쪽 설명 -->
  <article class="row">
    <!-- 캡처를 누르면 데모가 새 탭으로 열림 (데모가 없으면 그림만) -->
    <component
      :is="project.demo ? 'a' : 'div'"
      v-if="project.thumb"
      class="shot"
      :href="project.demo || undefined"
      :target="project.demo ? '_blank' : undefined"
      :rel="project.demo ? 'noopener' : undefined"
    >
      <img
        :src="project.thumb"
        :alt="project.thumbAlt || `${project.title} 화면`"
        width="720"
        height="450"
        loading="lazy"
      />
    </component>

    <div class="main">
      <h3>{{ project.title }}</h3>
      <p class="summary">{{ project.summary }}</p>
      <p v-if="project.result" class="result">
        <strong>결과</strong> {{ project.result }}
      </p>
      <!-- 데모에 로그인이 필요하면 체험 계정 안내 (없으면 안 보임) -->
      <p v-if="project.demoNote" class="demo-note">{{ project.demoNote }}</p>
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
  grid-template-columns: 340px 1fr; /* 캡처(340px) + 설명(남은 폭) */
  gap: 32px;
  align-items: start;
  padding: 32px 0;
  border-bottom: 1px solid var(--border); /* 항목 사이 구분선 */
}
/* 캡처: 얇은 테두리만, 그림자·둥근 모서리 최소 */
.shot {
  display: block;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  background: var(--bg-soft);
}
.shot img {
  display: block;
  width: 100%;
  height: auto;
}
a.shot:hover {
  border-color: var(--text-sub);
}
h3 {
  margin: 0;
  font-size: 21px;
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
  font-size: 0.875rem;
  color: var(--text-sub);
}
.tags {
  margin: 12px 0 14px;
  font-size: 13px;
  color: var(--text-sub);
}
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* 폰·좁은 화면: 캡처를 위, 설명을 아래로 */
@media (max-width: 760px) {
  .row {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 24px 0;
  }
}
</style>

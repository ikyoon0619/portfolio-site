<script setup>
// 부모(ProjectsSection)에게서 받는 값
defineProps({
  project: { type: Object, required: true },
  featured: { type: Boolean, default: false }, // true면 대표 카드 (가로로 넓게)
});
</script>

<template>
  <article class="card" :class="{ featured }">
    <header class="head">
      <h3>{{ project.title }}</h3>
      <span v-if="project.status" class="status">{{ project.status }}</span>
    </header>

    <p class="summary">{{ project.summary }}</p>

    <!-- 동작 흐름: 항목 사이에 화살표 -->
    <ol v-if="project.flow.length" class="flow">
      <li v-for="(step, i) in project.flow" :key="step">
        <span class="step">{{ step }}</span>
        <span v-if="i < project.flow.length - 1" class="arrow">→</span>
      </li>
    </ol>

    <ul class="highlights">
      <li v-for="h in project.highlights" :key="h">{{ h }}</li>
    </ul>

    <div class="tags">
      <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span>
    </div>

    <div class="links">
      <a :href="project.github" target="_blank" rel="noopener">GitHub</a>
      <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener"
        >데모</a
      >
    </div>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.featured {
  grid-column: 1 / -1; /* 대표 카드는 줄 전체를 차지 */
  border-color: #2563eb;
}
.head {
  display: flex;
  align-items: center;
  gap: 8px;
}
h3 {
  margin: 0;
  font-size: 20px;
}
.status {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 999px;
  background: #eff6ff;
  color: #2563eb;
}
.summary {
  margin: 0;
  color: #444;
}

.flow {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.flow li {
  display: flex;
  align-items: center;
  gap: 4px;
}
.step {
  font-size: 13px;
  padding: 4px 8px;
  border-radius: 6px;
  background: #f3f4f6;
}
.arrow {
  color: #9ca3af;
}

.highlights {
  margin: 0;
  padding-left: 18px;
}
.highlights li {
  margin: 2px 0;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tag {
  font-size: 12px;
  padding: 2px 8px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  color: #555;
}

.links {
  display: flex;
  gap: 12px;
  margin-top: auto;
} /* margin-top:auto = 카드 맨 아래로 */
</style>

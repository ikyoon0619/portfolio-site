<script setup>
import { career } from "../data/career";
</script>

<template>
  <section id="career" class="section">
    <h2>경력</h2>
    <ol class="timeline">
      <li v-for="c in career" :key="c.period" class="item">
        <!-- 왼쪽: 기간과 직급 -->
        <div class="when">
          <p class="period">{{ c.period }}</p>
          <p class="role">{{ c.role }}</p>
        </div>
        <!-- 오른쪽: 회사, 프로젝트, 한 일 -->
        <div class="body">
          <h3>{{ c.company }}</h3>
          <p class="project">{{ c.project }}</p>
          <ul class="tasks">
            <li v-for="t in c.tasks" :key="t">{{ t }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
}
.item {
  display: grid;
  grid-template-columns: 200px 1fr; /* 왼쪽 200px, 오른쪽 나머지 */
  gap: 32px;
  padding: 28px 0;
  border-top: 1px solid var(--border); /* 항목 사이 구분선 */
}
.item:last-child {
  border-bottom: 1px solid var(--border); /* 마지막 항목은 아래에도 선 */
}
.period {
  margin: 0;
  font-weight: 700;
  font-variant-numeric: tabular-nums; /* 숫자 폭을 같게 → 날짜 세로 정렬 */
}
.role {
  margin: 2px 0 0;
  font-size: 14px;
  color: var(--text-sub);
}
h3 {
  margin: 0;
  font-size: 20px;
  letter-spacing: -0.01em;
}
/* 프로젝트명: 꼬리표 상자 없이 글자색만 */
.project {
  margin: 4px 0 10px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
}
.tasks {
  margin: 0;
  padding-left: 18px;
  color: var(--text-sub);
}
.tasks li {
  margin: 3px 0;
}
.tasks li::marker {
  color: var(--border); /* 글머리 점을 연하게 */
}

/* 폰: 기간을 위, 내용을 아래로 */
@media (max-width: 600px) {
  .item {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 22px 0;
  }
}
</style>

<script setup>
import { skills, certifications } from "../data/skills";
</script>

<template>
  <section id="skills" class="section">
    <p class="eyebrow">Skills</p>
    <h2>기술</h2>
    <div class="groups">
      <!-- 기술 그룹 5개 -->
      <div v-for="s in skills" :key="s.group" class="group">
        <h3>{{ s.group }}</h3>
        <div class="tags">
          <span v-for="item in s.items" :key="item" class="tag">{{
            item
          }}</span>
        </div>
      </div>
      <!-- 자격증도 같은 박스 모양으로 -->
      <div class="group">
        <h3>자격증</h3>
        <ul class="certs">
          <li v-for="c in certifications" :key="c.name">
            <span>{{ c.name }}</span
            ><span class="date">{{ c.date }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 칸 최소 300px, 들어가는 만큼 자동으로 칸 수 결정 (넓은 화면 3칸, 폰 1칸) */
.groups {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}
.group {
  padding: 22px;
  background: var(--bg-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
.group h3 {
  margin: 0 0 12px;
  font-size: 15px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tag {
  font-size: 13px;
  font-weight: 500;
  padding: 5px 11px;
  border-radius: 8px;
  background: var(--surface); /* 회색 박스 위의 흰 태그 */
  border: 1px solid var(--border);
}
.certs {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 6px;
  font-size: 14px;
}
.certs li {
  display: flex;
  justify-content: space-between; /* 이름은 왼쪽, 날짜는 오른쪽 끝 */
}
.date {
  color: var(--text-sub);
  font-variant-numeric: tabular-nums;
}
</style>

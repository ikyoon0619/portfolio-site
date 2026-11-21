<script setup>
import { career } from "../data/career";
</script>

<template>
  <section id="career" class="section">
    <h2>경력</h2>
    <ol class="timeline">
      <li v-for="c in career" :key="c.period" class="item">
        <p class="period">{{ c.period }}</p>
        <h3>{{ c.company }}</h3>
        <p class="project">{{ c.project }}</p>
        <ul class="tasks">
          <li v-for="t in c.tasks" :key="t">{{ t }}</li>
        </ul>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0 0 0 20px;
  border-left: 2px solid #e5e7eb; /* 세로선 */
}
.item {
  position: relative;
  padding-bottom: 28px;
}
.item::before {
  /* 세로선 위의 점 */
  content: "";
  position: absolute;
  left: -27px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #2563eb;
}
.period {
  margin: 0;
  font-size: 13px;
  color: #6b7280;
}
h3 {
  margin: 2px 0;
  font-size: 18px;
}
.project {
  margin: 0 0 6px;
  color: #444;
}
.tasks {
  margin: 0;
  padding-left: 18px;
}
</style>

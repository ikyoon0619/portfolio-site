<script setup>
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard.vue";
</script>

<template>
  <section id="projects" class="section">
    <!-- 1단계에서 만든 .eyebrow: 제목 위 작은 영문 라벨 -->
    <p class="eyebrow">Projects</p>
    <h2>프로젝트</h2>
    <div class="grid">
      <!-- 첫 번째(index 0) 프로젝트만 대표 카드 -->
      <ProjectCard
        v-for="(p, index) in projects"
        :key="p.id"
        :project="p"
        :featured="index === 0"
      />
    </div>
  </section>
</template>

<style scoped>
/* 폭이 넓으면 2열, 좁으면(폰) 1열로 자동 배치 */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}
</style>

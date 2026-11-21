<script setup>
import { ref, computed } from "vue";
import { projects } from "../data/projects";
import { projectDetails } from "../data/projectDetails";
import ProjectCard from "./ProjectCard.vue";
import ProjectDetail from "./ProjectDetail.vue";

// 지금 열려 있는 프로젝트 (없으면 null = 상세 창 닫힘)
const selected = ref(null);
// 열린 프로젝트의 상세 내용: selected가 바뀌면 자동으로 다시 계산됨
const selectedDetail = computed(() =>
  selected.value ? projectDetails[selected.value.id] : null,
);
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
        :has-detail="Boolean(projectDetails[p.id])"
        @open="selected = p"
      />
    </div>

    <!-- 상세 창: 하나만 두고 내용만 바꿔 끼움. 닫히면 selected를 비움 -->
    <ProjectDetail
      :project="selected"
      :detail="selectedDetail"
      @close="selected = null"
    />
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

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
    <h2>프로젝트</h2>
    <div class="grid">
      <ProjectCard
        v-for="p in projects"
        :key="p.id"
        :project="p"
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
/* 프로젝트를 위에서 아래로 한 줄씩 */
.grid {
  border-top: 1px solid var(--border); /* 박스 대신 줄로 구분 */
}
</style>

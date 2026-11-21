<script setup>
import { projects } from "../data/projects";
</script>

<template>
  <section id="projects" class="section">
    <h2>프로젝트</h2>
    <ul>
      <li v-for="p in projects" :key="p.id">
        <strong>{{ p.title }}</strong> · {{ p.summary }}
      </li>
    </ul>
  </section>
</template>

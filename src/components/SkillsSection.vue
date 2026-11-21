<script setup>
import { skills } from "../data/skills";
</script>

<template>
  <section id="skills" class="section">
    <h2>기술</h2>
    <p v-for="s in skills" :key="s.group">
      <strong>{{ s.group }}</strong
      >: {{ s.items.join(", ") }}
    </p>
  </section>
</template>

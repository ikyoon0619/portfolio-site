<script setup>
import { profile } from "../data/profile";
</script>

<template>
  <section id="about" class="section">
    <h1>{{ profile.name }}</h1>
    <p class="title">{{ profile.title }}</p>
    <p>{{ profile.summary }}</p>
  </section>
</template>

<style scoped>
.section {
  padding-top: 120px;
}
h1 {
  font-size: 40px;
  margin: 0;
  letter-spacing: -0.5px;
}
.title {
  font-size: 20px;
  color: var(--accent);
  font-weight: 600;
  margin: 4px 0 16px;
}

@media (max-width: 600px) {
  .section {
    padding-top: 96px;
  }
  h1 {
    font-size: 32px;
  }
  .title {
    font-size: 17px;
  }
}
</style>

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
h1 {
  font-size: 36px;
  margin: 0;
}
.title {
  font-size: 18px;
  color: #555;
  margin: 4px 0 16px;
}
</style>

<script setup>
import { profile } from "../data/profile";
</script>

<template>
  <section id="contact" class="section">
    <h2>연락처</h2>
    <p v-if="profile.email">
      이메일: <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
    </p>
    <p>
      GitHub:
      <a :href="profile.github" target="_blank" rel="noopener">{{
        profile.github
      }}</a>
    </p>
  </section>
</template>

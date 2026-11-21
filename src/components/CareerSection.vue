<script setup>
import { career } from "../data/career";
</script>

<template>
  <section id="career" class="section">
    <h2>경력</h2>
    <div v-for="c in career" :key="c.period">
      <p>
        <strong>{{ c.company }}</strong> · {{ c.period }}
      </p>
      <p>{{ c.project }}</p>
    </div>
  </section>
</template>

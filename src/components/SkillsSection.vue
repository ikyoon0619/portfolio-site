<script setup>
import { skills, certifications } from "../data/skills";
</script>

<template>
  <section id="skills" class="section">
    <h2>기술</h2>
    <div class="groups">
      <div v-for="s in skills" :key="s.group" class="group">
        <h3>{{ s.group }}</h3>
        <div class="tags">
          <span v-for="item in s.items" :key="item" class="tag">{{
            item
          }}</span>
        </div>
      </div>
    </div>

    <h3 class="cert-title">자격증</h3>
    <ul class="certs">
      <li v-for="c in certifications" :key="c.name">
        {{ c.name }} <span class="date">{{ c.date }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.groups {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}
.group h3,
.cert-title {
  margin: 0 0 8px;
  font-size: 15px;
  color: #374151;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tag {
  font-size: 13px;
  padding: 4px 10px;
  border-radius: 999px;
  background: #f3f4f6;
}
.cert-title {
  margin-top: 28px;
}
.certs {
  margin: 0;
  padding-left: 18px;
}
.date {
  color: #6b7280;
  font-size: 13px;
  margin-left: 4px;
}
</style>

<script setup>
import { profile } from "../data/profile";
</script>

<template>
  <section id="contact" class="section">
    <h2>연락처</h2>
    <p class="desc">Java/Spring 백엔드 개발자 신입 포지션을 찾고 있습니다.</p>
    <!-- 큰 색 박스 대신 메일과 GitHub만 담백하게 -->
    <dl class="list">
      <template v-if="profile.email">
        <dt>메일</dt>
        <dd>
          <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        </dd>
      </template>
      <dt>GitHub</dt>
      <dd>
        <a :href="profile.github" target="_blank" rel="noopener">{{
          profile.github.replace("https://", "")
        }}</a>
      </dd>
      <template v-if="profile.resumePdf">
        <dt>이력서</dt>
        <dd><a :href="profile.resumePdf" download>PDF 받기</a></dd>
      </template>
    </dl>
    <footer class="footer">
      © 2026 {{ profile.name }} · Vue 3 + Vite로 만들었습니다
    </footer>
  </section>
</template>

<style scoped>
.section h2 {
  margin-bottom: 8px;
}
.desc {
  margin: 0 0 24px;
  color: var(--text-sub);
}
.list {
  margin: 0;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 10px 16px;
  font-size: 17px;
  padding: 20px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.list dt {
  color: var(--text-sub);
}
.list dd {
  margin: 0;
  font-weight: 600;
}
.list a {
  text-decoration: underline;
  text-underline-offset: 3px;
}
.footer {
  padding: 56px 0 32px;
  font-size: 13px;
  color: var(--text-sub);
}
</style>

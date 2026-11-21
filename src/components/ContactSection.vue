<script setup>
import { profile } from "../data/profile";
</script>

<template>
  <section id="contact" class="section">
    <div class="box">
      <p class="eyebrow">Contact</p>
      <h2>함께 만들 서비스가 있다면 연락 주세요</h2>
      <p class="desc">백엔드와 LLM 서비스 개발 포지션을 찾고 있습니다.</p>
      <div class="cta">
        <!-- 이메일이 비어 있으면 버튼을 숨김 -->
        <a
          v-if="profile.email"
          :href="`mailto:${profile.email}`"
          class="btn primary"
          >{{ profile.email }}</a
        >
        <a
          :href="profile.github"
          target="_blank"
          rel="noopener"
          class="btn ghost"
          >GitHub ↗</a
        >
      </div>
    </div>
    <footer class="footer">
      © 2026 {{ profile.name }} · Vue 3 + Vite로 만들었습니다
    </footer>
  </section>
</template>

<style scoped>
.box {
  padding: 56px 48px;
  border-radius: 24px;
  text-align: center;
  color: #fff;
  background:
    /* 오른쪽 위 보라빛: 포인트색 55% + 투명 45% */
    radial-gradient(
      80% 120% at 100% 0%,
      color-mix(in srgb, var(--accent) 55%, transparent),
      transparent 60%
    ),
    #0f172a;
}
.box .eyebrow {
  color: #a5b4fc; /* 어두운 배경에서 잘 보이는 밝은 보라 */
}
.box h2 {
  color: #fff;
  margin-bottom: 12px;
}
.desc {
  margin: 0 auto 28px;
  max-width: 520px;
  color: #cbd5e1;
}
.cta {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}
.ghost {
  background: transparent;
  color: #fff;
  border-color: rgba(255, 255, 255, 0.25);
}
.footer {
  padding: 40px 0 32px;
  text-align: center;
  font-size: 13px;
  color: var(--text-sub);
}

@media (max-width: 600px) {
  .box {
    padding: 40px 20px;
  }
}
</style>
